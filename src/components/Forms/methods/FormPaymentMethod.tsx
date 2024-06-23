import { ModalFormProps } from '../../ModalForm';
import { IPaymentMethod } from '../../../types/integrations.types';
import { AppSubmitHandler } from '../../../hooks/useAppForm.hook';
import { DisabledStates, IBaseKeys } from '../../../types/utils.types';
import { useLoaders } from '../../../Providers/Loaders/useLoaders.hook';
import { useAppDispatch } from '../../../redux/store.store';
import React from 'react';
import { t } from '../../../lang';
import { useAppForm } from '../../../hooks';
import { omit, pick } from 'lodash';
import ModalBase from '../../atoms/Modal';
import { toReqData } from '../../../utils';
import { updatePaymentMethodThunk } from '../../../redux/payments/payments.thunks';
import { AccordionForm } from '../../atoms/FormArea/AccordionForm';
import InputLabel from '../../atoms/Inputs/InputLabel';
import InputText from '../../atoms/Inputs/InputText';
import ButtonSwitch from '../../atoms/ButtonSwitch';
import FlexBox from '../../atoms/FlexBox';

export interface FormPaymentMethodProps extends Omit<ModalFormProps<any, any, IPaymentMethod>, 'onSubmit'> {
  _id?: string;
  create?: boolean;
  edit?: boolean;
  onSubmit?: AppSubmitHandler<IPaymentMethodFormData, { logAfterSubmit?: boolean }>;
}
export interface IPaymentMethodFormData
  extends Omit<IPaymentMethod, Exclude<IBaseKeys, '_id'> | 'service' | 'extService'> {}

export const FormPaymentMethod = ({ defaultState, onClose, title, ...props }: FormPaymentMethodProps) => {
  const loaders = useLoaders<'main' | keyof IPaymentMethodFormData>();

  // const pmntMethods = usePaymentsSelector().methods;

  const dispatch = useAppDispatch();

  // const [langKey, setLangKey] = useState<LangKeyEnum>(LangKeyEnum.ua);

  const formMethods = useAppForm<IPaymentMethodFormData>({
    defaultValues: { ...omit(defaultState, ['isDefault', 'author', 'owner', 'editor', 'parent', 'value']) },
    // resolver: yupResolver(validation),
    reValidateMode: 'onSubmit',
  });
  const {
    formState: { errors },
    setValue,
    handleSubmit,
    getValues,
    register,
    getFieldState,
  } = formMethods;
  const registerSwitch = (name: keyof DisabledStates) => {
    return {
      name,
      value: getValues(`disabledFor.${name}`),
      onChange: (v: boolean) => {
        setValue(`disabledFor.${name}`, v, { shouldTouch: true, shouldDirty: true });
      },
    };
  };

  const getOnValid = (areaName?: keyof IPaymentMethodFormData) => (fData: IPaymentMethodFormData) => {
    const pickPaths: (keyof IPaymentMethodFormData)[] | undefined = areaName ? [areaName] : undefined;

    const omitPaths: (keyof IPaymentMethodFormData | string)[] | undefined = !areaName
      ? ['isDefault', 'owner', 'author', 'editor', 'cmsConfigs', 'type', 'group']
      : undefined;

    const reqData = pickPaths ? pick(fData, ['_id', ...pickPaths]) : omitPaths ? omit(fData, omitPaths) : fData;
    console.log('fData', fData);
    dispatch(
      updatePaymentMethodThunk({
        onLoading: loaders.onLoading(areaName || 'main'),
        data: {
          data: toReqData(reqData, { uuidFieldKeysMap: { service: 'serviceId' } }),
        },
      })
    );
  };

  const registerFormArea = (
    areaName?: keyof IPaymentMethodFormData
  ): {
    canSubmit?: boolean;
    isLoading?: boolean;
    onSubmit?: (ev: React.BaseSyntheticEvent) => void;
  } => {
    if (!areaName) {
      return {
        isLoading: loaders.isLoading.main,
        canSubmit: true,
        onSubmit: handleSubmit(getOnValid(areaName)),
      };
    }
    return {
      isLoading: loaders.isLoading?.[areaName],
      canSubmit: getFieldState(areaName).isDirty,
      onSubmit: handleSubmit(getOnValid(areaName)),
    };
  };

  return (
    <ModalBase title={title ?? 'Payment method'}>
      <AccordionForm label={t('Main info')} {...registerFormArea()}>
        <InputLabel
          label={t('label')}
          error={errors.label}
          // disabled={defaultState?.isDefault}
          required={!defaultState?.isDefault}
        >
          <InputText
            placeholder={t('insertLabel')}
            {...register('label')}
            // disabled={defaultState?.isDefault}
            required={!defaultState?.isDefault}
            autoFocus={!defaultState?.isDefault}
          />
        </InputLabel>

        <FlexBox gap={12} fxDirection={'row'}>
          <InputLabel label={t('Type')} disabled={defaultState?.isDefault}>
            <InputText placeholder={t('Type')} {...register('type.internal')} disabled={defaultState?.isDefault} />
          </InputLabel>

          <InputLabel label={t('Type external')} disabled={defaultState?.isDefault}>
            <InputText
              placeholder={t('Type external')}
              {...register('type.external')}
              disabled={defaultState?.isDefault}
            />
          </InputLabel>

          <InputLabel label={t('Group')} disabled={defaultState?.isDefault}>
            <InputText placeholder={t('Group')} {...register('group')} disabled={defaultState?.isDefault} />
          </InputLabel>
        </FlexBox>

        <InputLabel label={t('Disabled for all')} error={errors?.disabledFor?.all}>
          <ButtonSwitch {...registerSwitch('all')} />
        </InputLabel>

        <InputLabel label={t('Disabled for customer')} error={errors?.disabledFor?.customer}>
          <ButtonSwitch {...registerSwitch('customer')} />
        </InputLabel>
      </AccordionForm>
    </ModalBase>
  );
};
