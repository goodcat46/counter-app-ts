import React, { useEffect, useMemo, useState } from 'react';
import ModalForm from 'components/ModalForm';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import { IDirInTreeProps, IDirItemBase } from '../../../types/dir.types';
import { useFilteredLisData } from 'hooks';

import { FilterOpt } from '../../atoms/ModalFilter';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import styled from 'styled-components';
import { ServiceName, useAppServiceProvider } from '../../../hooks/useAppServices.hook';
import { ProductsService } from '../../../hooks/useProductsService.hook';
import FlexBox from '../../atoms/FlexBox';
import { ApiDirType } from '../../../redux/APP_CONFIGS';
import { useProductsSelector } from '../../../redux/selectors.store';
import { IProperty, IPropertyBase, IPropertyDto } from '../../../types/properties.types';
import { ToastService } from '../../../services';
import { DirPropertiesCTX, DirPropertiesCTXValue } from './DirPropertiesCTX';
import PropertiesGroupItem from './components/PropertiesGroupItem';
import { AppSubmitHandler } from '../../../hooks/useAppForm.hook';
import { OnlyUUID } from '../../../redux/global.types';
import { MaybeNull } from '../../../types/utils.types';

export type PropertiesLevelType = { isGroup?: boolean; isProperty?: boolean; isValue?: boolean };

export interface DirPropertiesProps
  extends IDirInTreeProps<
    ApiDirType.PROPERTIES_PRODUCTS,
    IPropertyDto,
    IPropertyDto,
    IProperty,
    ProductsService,
    PropertiesLevelType & { onSuccess?: (data: IProperty[]) => void }
  > {}

export interface DiPropertiesRenderItemProps<
  Item extends IPropertyBase = IPropertyBase,
  ParentItem extends IPropertyBase = IPropertyBase
> {
  item: Item;
  parent?: MaybeNull<ParentItem>;
  index: number;
  onCreateValue?: AppSubmitHandler<{ parent: MaybeNull<ParentItem> }, PropertiesLevelType>;
  onCreateChild?: AppSubmitHandler<{ parent: MaybeNull<ParentItem> }, PropertiesLevelType>;
  onUpdate?: AppSubmitHandler<{ _id: string; data: Item }, PropertiesLevelType>;
  onDelete?: AppSubmitHandler<OnlyUUID>;
  onChangeSelectableStatus?: (_id: string, status: boolean) => void;
}
const loader = ToastService.createLoader('Loading properties...');

const DirProperties: React.FC<DirPropertiesProps> = ({
  createParentTitle,
  dirType,
  filterSearchPath,
  filterDefaultValue,
  availableLevels = 3,
  title,
  actionsCreator,
  ...props
}) => {
  const service = useAppServiceProvider()[ServiceName.products];
  const { properties } = useProductsSelector();
  const modalService = useModalProvider();
  const [current, setCurrent] = useState(filterDefaultValue);
  // const [loadedData, setLoadedData] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(false);

  const actions = useMemo(() => {
    return actionsCreator({ modalService, type: current, service, dirType });
  }, [actionsCreator, current, dirType, modalService, service]);

  function handleFilterData({ value }: FilterOpt) {
    value && setCurrent(value);
  }

  const fList = useFilteredLisData<IDirItemBase>({
    searchParam: filterSearchPath,
    searchQuery: current,
    data: properties,
  });

  useEffect(() => {
    const control = loader.open();

    service
      .getAllProperties({
        data: { params: { createTreeData: true } },
        // onSuccess: setLoadedData,
        onLoading: setLoading,
      })
      .finally(control.close);

    return () => {
      control.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderGroups = useMemo(() => {
    return fList.map((item, index) => (
      <PropertiesGroupItem
        key={`group_${item._id}`}
        item={item as never}
        index={index}
        onUpdate={(data, o) => {
          actions.onUpdate && actions.onUpdate(data._id, data.data, { ...o });
        }}
        onCreateValue={(data, o) => {
          data.parent?._id &&
            actions?.onCreateValue &&
            actions?.onCreateValue(data.parent?._id, data?.parent as never, { ...o });
        }}
        onCreateChild={(data, o) => {
          data.parent?._id &&
            actions?.onCreateChild &&
            actions?.onCreateChild(data.parent?._id, data?.parent as never, { ...o });
        }}
        onChangeSelectableStatus={(_id, status) => {
          actions?.onChangeDisableStatus && actions?.onChangeDisableStatus(_id, status);
        }}
      />
    ));
  }, [actions, fList]);

  const CTXValue: DirPropertiesCTXValue = {};

  return (
    <ModalForm
      style={{ maxWidth: 480 }}
      title={loading ? 'Loading ...' : title}
      {...props}
      isLoading={loading}
      onOptSelect={handleFilterData}
      extraFooter={
        actions?.onCreateParent && (
          <CreateParent>
            <ButtonIcon variant="outlinedSmall" onClick={() => actions?.onCreateParent && actions.onCreateParent()}>
              {createParentTitle || 'Create parent'}
            </ButtonIcon>
          </CreateParent>
        )
      }
    >
      <DirPropertiesCTX.Provider value={CTXValue}>
        <FlexBox flex={1} justifyContent={'flex-start'} style={{ position: 'relative' }}>
          {renderGroups}
        </FlexBox>
      </DirPropertiesCTX.Provider>
    </ModalForm>
  );
};

const CreateParent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 8px;
`;
export default DirProperties;
