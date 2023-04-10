import React, { useState } from 'react';
import ModalForm, { FilterOpt, ModalFormProps } from 'components/ModalForm/ModalForm';
import DirList from '../DirList/DirList';
import { founder } from 'utils';
import useCategoriesService from 'redux/categories/useCategoriesService.hook';
import { CategoryTypes, ICategory } from 'data/categories.types';
import { useModalProvider } from '../../ModalProvider/ModalProvider';
import FormCreateCategory from './FormCreateCategory';
import styled from 'styled-components';

export type CategoryFilterOpt = FilterOpt<CategoryTypes>;

export interface DirCategoriesProps extends ModalFormProps {
  title: string;
  filterOptions?: CategoryFilterOpt[];
}

const DirCategories: React.FC<DirCategoriesProps> = props => {
  const modal = useModalProvider();
  const { categories, create, deleteById, editById, getById } = useCategoriesService();
  const [filteredData, setFilteredData] = useState<ICategory[]>(categories);
  const [dirType, setDirType] = useState<CategoryTypes>('INCOME');

  function onEdit(_id?: string) {
    const category = getById(_id || '');
    modal.handleOpenModal({
      ModalChildren: FormCreateCategory,
      modalChildrenProps: {
        title: `Редагувати ${category?.owner ? 'під-категорію' : 'категорію'} "${category?.label || category?.name}"`,
        category: categories.find(el => el._id === _id),
        edit: true,
        type: dirType,
        onSubmit: (submitData) => {
          _id ? editById(_id, {
            label: submitData.name || submitData.label,
            owner: submitData.owner,
            descr: submitData.descr,

          }) : console.log('_id not passed');
        },
      },
    });
  }

  function onCreateChild(ownerId?: string) {
    modal.handleOpenModal({
      ModalChildren: FormCreateCategory,
      modalChildrenProps: {
        title: 'Створити під-категорію',
        type: dirType,
        onSubmit: (submitData) => {
          console.log({ ...submitData, owner: ownerId });
          create({ ...submitData, owner: ownerId });
        },
      },
    });
  }

  function onCreateParent() {
    modal.handleOpenModal({
      ModalChildren: FormCreateCategory,
      modalChildrenProps: {
        title: 'Створити категорію',
        type: dirType,
        onSubmit: (submitData) => {
          console.log('onCreateParent', submitData);
          create(submitData);
        },
      },
    });
  }


  function onOptSelect({ value }: { value: CategoryTypes }) {
    setDirType(value);
    setFilteredData(founder({ searchParam: 'type', searchQuery: value, data: categories }));
  }

  return (
    <StModalForm {...props} onOptSelect={onOptSelect}>
      <Box>
        <DirList
          list={filteredData}
          onDelete={deleteById}
          onEdit={onEdit}
          onCreateChild={onCreateChild}
          entryList={filteredData.filter(el => !el?.owner)}
          createParentTitle='Свторити категорію'
          onCreateParent={onCreateParent}
        />
      </Box>
    </StModalForm>
  );
};

const StModalForm = styled(ModalForm)`
  height: 70vh;

  @media screen and (max-height: 480px) {
    height: 95vh;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  max-height: 100%;
  padding: 0 12px;
`;

export default DirCategories;
