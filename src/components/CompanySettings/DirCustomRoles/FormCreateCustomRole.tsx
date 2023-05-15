import InputTextPrimary from 'components/atoms/Inputs/InputTextPrimary';
import TitleBase from 'components/atoms/TitleBase';
import ModalForm, { ModalFormProps } from 'components/ModalForm';
import { ICustomRole } from 'redux/customRoles/customRoles.types';
import { useState } from 'react';
import styled from 'styled-components';

export interface FormCreateCustomRoleProps extends Omit<ModalFormProps, 'onSubmit'> {
  _id?: string;
  edit?: boolean;
  customRole?: ICustomRole;
  getCustomeRoleByName?: (name: string) => string | undefined;
  onSubmit: (_id: string, data: Partial<ICustomRole>) => void;
}

const FormCreateCustomRole: React.FC<FormCreateCustomRoleProps> = ({
                                                                     onSubmit,
                                                                     getCustomeRoleByName,
                                                                     customRole,
                                                                     edit,
                                                                     _id,
                                                                     ...props
                                                                   }) => {
  const [formData, setFormData] = useState<Partial<ICustomRole>>(customRole ? customRole : {});

  function onSubmitWrapper() {
    onSubmit && _id && onSubmit(_id, formData);
  }

  function onChange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = ev.target;
    getCustomeRoleByName && getCustomeRoleByName(value);

    setFormData(prev => ({ ...prev, [name]: value }));
  }

  return (
    <StModalForm {...props} onSubmit={onSubmitWrapper}>
      <Inputs>
        <InputTextPrimary
          value={formData.label ? formData.label : ''}
          label='Назва'
          name='label'
          placeholder='Введіть назву ролі'
          onChange={onChange}
        />

        <InputTextPrimary
          value={formData.descr ? formData.descr : ''}
          label='Коментар'
          name='descr'
          placeholder='Введіть короткий коментар до ролі'
          onChange={onChange}
        />

        <ActionsList>
          <TitleBase>Доступні дії</TitleBase>

          <List>
            {formData.actions?.map((act, idx) => (
              <ListItem key={idx}>{act}</ListItem>
            ))}
          </List>
        </ActionsList>
      </Inputs>
    </StModalForm>
  );
};

const StModalForm = styled(ModalForm)`
  min-height: 250px;
`;
const Inputs = styled.div`
  display: flex;
  flex-direction: column;

  padding: 12px;
`;

const ActionsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  height: 100%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 26px 1fr;
`;

export default FormCreateCustomRole;
