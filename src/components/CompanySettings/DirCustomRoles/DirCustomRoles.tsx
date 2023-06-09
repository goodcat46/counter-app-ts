import React from 'react';
import ModalForm, { ModalFormProps } from 'components/ModalForm';
import DirList from '../../Directories/DirList/DirList';

import styled from 'styled-components';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import useCustomRolesService from 'redux/customRoles/useCustomRolesServise.hook';
import FormCreateCustomRole from './FormCreateCustomRole';
import FlexBox from '../../atoms/FlexBox';

export interface DirCustomRolesProps extends ModalFormProps {
  title: string;
}

const DirCustomRoles: React.FC<DirCustomRolesProps> = props => {
  const modal = useModalProvider();
  const { customRoles, create, editById, deleteById, getById } = useCustomRolesService();

  function onEdit(_id: string) {
    modal.handleOpenModal({
      ModalChildren: FormCreateCustomRole,
      modalChildrenProps: {
        title: 'Редагувати роль',
        _id,
        customRole: getById(_id),
        onSubmit: editById,
      },
    });
  }

  function onCreateParent() {
    modal.handleOpenModal({
      ModalChildren: FormCreateCustomRole,
      modalChildrenProps: {
        title: 'Створити роль',
        onSubmit: (data: any) => {
          create(data);
        },
      },
    });
  }

  return (
    <StModalForm {...props}>
      <FlexBox fillWidth flex={'1'} padding={'0 12px'} maxHeight={'100%'}>
        <DirList
          onDelete={deleteById}
          onEdit={onEdit}
          createParentTitle="Свторити роль"
          onCreateParent={onCreateParent}
          // list={[...customRoles, ...customRoles, ...customRoles, ...customRoles]}
          list={customRoles}
        />
      </FlexBox>
    </StModalForm>
  );
};

const StModalForm = styled(ModalForm)`
  height: 70vh;
  @media screen and (max-height: 480px) {
    height: 95vh;
  }
`;

export default DirCustomRoles;
