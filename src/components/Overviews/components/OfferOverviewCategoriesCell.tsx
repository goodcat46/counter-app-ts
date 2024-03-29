import { RenderOverviewCellComponent } from './overview-types';
import { IProduct } from '../../../types/products.types';
import { useDirectoriesSelector } from '../../../redux/selectors.store';
import { ApiDirType } from '../../../redux/APP_CONFIGS';
import React, { useMemo } from 'react';
import { CellStyledComp } from './CellStyles';
import { OverviewCellHeader } from './OverviewCellHeader';
import FormProductCategoriesOverlay from '../../Forms/FormProduct/FormSelectCategoriesOverlay';
import FlexBox from '../../atoms/FlexBox';
import { IProductCategoryDirItem } from '../../../types/dir.types';

export const OfferOverviewCategoriesCell: RenderOverviewCellComponent<IProduct> = ({
  cell,
  setOverlayContent,
  data,
}) => {
  const categories = useDirectoriesSelector(ApiDirType.CATEGORIES_PROD).directory;
  const selectedCategoryIds = useMemo(() => {
    return data?.categories?.map(el => el._id) ?? [];
  }, [data?.categories]);

  const renderItems = useMemo(() => {
    return categories.map((c, index) => {
      return <NotActiveTreeDataItem key={`cat_${c._id}`} selectedIds={selectedCategoryIds} item={c} />;
    });
  }, [categories, selectedCategoryIds]);

  return (
    <CellStyledComp.Cell style={{ minHeight: 'max-content' }}>
      <OverviewCellHeader
        title={cell?.title}
        openOverlayButtonTitle={'Змінити'}
        onOpenOverlayPress={() => {
          setOverlayContent({
            RenderComponent: FormProductCategoriesOverlay,
          });
        }}
      />

      <FlexBox
        fillWidth
        fxDirection={'row'}
        justifyContent={'flex-end'}
        flexWrap={'wrap'}
        // overflow={'hidden'}
        gap={8}
        style={{ height: 'max-content', minHeight: 26 }}
      >
        {renderItems}
      </FlexBox>
    </CellStyledComp.Cell>
  );
};

const NotActiveTreeDataItem: React.FC<{
  item: IProductCategoryDirItem;
  lvl?: number;
  index?: number;
  selectedIds: string[];
}> = ({ item, lvl = 0, selectedIds }) => {
  const renderChildren = useMemo(() => {
    return item?.childrenList?.map((item, index) => {
      return (
        <NotActiveTreeDataItem
          key={`item_lvl_${lvl}_${item._id}`}
          item={item}
          index={index}
          lvl={lvl + 1}
          selectedIds={selectedIds}
        />
      );
    });
  }, [item?.childrenList, lvl, selectedIds]);

  const isSelected = useMemo(() => {
    return selectedIds.includes(item._id);
  }, [item._id, selectedIds]);
  return (
    <>
      {isSelected && (
        <CellStyledComp.CategoryItem fxDirection={'row'} alignItems={'center'} padding={'0 2px 0 12px'} gap={2}>
          {item?.parent?.label && `${item?.parent?.label}/`}
          {`${item?.label}`}
        </CellStyledComp.CategoryItem>
      )}
      {renderChildren}
    </>
  );
};
