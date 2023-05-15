import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { useModalProvider } from 'components/ModalProvider/ModalProvider';
import { iconId } from 'data';

import Filter, { FilterProps, FilterSelectorType } from 'components/Filter/Filter';

export interface TableFilterProps {
  title?: string;
  filterSelectors?: FilterSelectorType[];
}

const TableFilter: React.FC<TableFilterProps> = ({ title, filterSelectors }) => {
  const modal = useModalProvider();
  
  return (
    <ButtonIcon
      iconId={iconId.filterOff}
      size='28px'
      iconSize='26px'
      variant='onlyIcon'
      onClick={() => {
        modal.handleOpenModal<FilterProps>({
          ModalChildren: Filter,
          modalChildrenProps: { title, filterSelectors },
        });
      }}
    />
  );
};

export default TableFilter;
