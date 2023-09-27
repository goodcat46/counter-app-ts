import FlexBox from '../../atoms/FlexBox';
import React, { useMemo } from 'react';
import { RenderOverviewCellComponent } from '../ProductOverviewXL';
import FormCreateVariation from '../../Forms/FormProduct/FormVariation';
import { IProperty } from '../../../redux/products/properties.types';
import styled from 'styled-components';
import { Text } from '../../atoms/Text';
import { useProductsSelector } from '../../../redux/selectors.store';
import FormSelectProperties from '../../Forms/FormProduct/FormSelectProperties';
import { IProduct } from '../../../redux/products/products.types';
import { formAddImageSetTabs } from '../../Forms/FormProduct/FormAddImageSet';
import FormProductImages from '../../Forms/FormProduct/FormProductImagesOverlay';
import ImagePreviewSmall from '../../atoms/ImagePreviewSmall';

export const OverviewTextCell: RenderOverviewCellComponent = ({ cell, data }) => {
  const value = cell.getValue ? cell.getValue(data) : null;

  return (
    <Cell>
      <CellText $isTitle $size={12}>
        {cell?.title}
      </CellText>

      <FlexBox
        fillWidth
        flex={1}
        fxDirection={'row'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        overflow={'hidden'}
        style={{ minHeight: 24 }}
      >
        <CellText $weight={500}>{value || 'не визначено'}</CellText>
      </FlexBox>
    </Cell>
  );
};
export const CategoriesCell: RenderOverviewCellComponent = ({ cell, data }) => {
  const renderItems = useMemo(() => {
    return data?.categories?.map((c, index) => {
      return (
        <CategoryItem key={`cat_${c._id}`}>{`${c?.parent?.label && `${c?.parent?.label}/`}${c?.label}`}</CategoryItem>
      );
    });
  }, [data?.categories]);

  return (
    <Cell style={{ minHeight: 'max-content' }}>
      <FlexBox fxDirection={'row'} justifyContent={'space-between'}>
        <CellText $isTitle $size={12}>
          {cell?.title}
        </CellText>

        <OverlayOpenButton>{'Змінити'}</OverlayOpenButton>
      </FlexBox>

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
    </Cell>
  );
};
export const VariationsTemplateCell: RenderOverviewCellComponent = ({ cell, setOverlayContent, data }) => {
  return (
    <Cell padding={'4px'}>
      <FlexBox alignItems={'center'} fxDirection={'row'} justifyContent={'space-between'} gap={8}>
        <CellText $isTitle $size={12}>
          {cell.title}
        </CellText>

        {data?.template && (
          <OverlayOpenButton
            type={'button'}
            onClick={() => {
              setOverlayContent({ RenderComponent: FormCreateVariation, props: { create: true } });
            }}
          >
            {'Перегляд'}
          </OverlayOpenButton>
        )}
      </FlexBox>

      <FlexBox
        fillWidth
        fxDirection={'row'}
        gap={8}
        height={'24px'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        overflow={'hidden'}
      >
        <CellText $disabled={!data?.template?.label} $weight={500}>{`${data?.template?.label}`}</CellText>
      </FlexBox>
    </Cell>
  );
};
interface OverviewPropertyComponentProps {
  item: IProperty;
  selectedItems?: string[];
  data?: IProduct;
  index: number;
}
export const ImagesCell: RenderOverviewCellComponent = ({ data, cell, setOverlayContent }) => {
  const renderImageSets = useMemo(() => {
    return data?.images?.map((set, index) => {
      return (
        <ImagesSetBox key={`set_${set?._id || index}`} fxDirection={'row'} gap={2} overflow={'auto'}>
          {formAddImageSetTabs.map(el => (
            <ImagePreviewSmall key={`img_${el.value}`} src={set[el.value] || ''} title={el.label} disabled />
          ))}
        </ImagesSetBox>
      );
    });
  }, [data?.images]);

  return (
    <Cell style={{ minHeight: 'max-content', padding: '4px 0' }}>
      <FlexBox fxDirection={'row'} justifyContent={'space-between'}>
        <CellText $isTitle $size={12}>
          {cell?.title}
        </CellText>

        <OverlayOpenButton
          onClick={() => {
            setOverlayContent({ RenderComponent: FormProductImages });
          }}
        >
          {'Змінити'}
        </OverlayOpenButton>
      </FlexBox>

      <FlexBox gap={2} height={'max-content'} padding={'8px 0'} style={{ minHeight: 26 }}>
        {renderImageSets}
      </FlexBox>
    </Cell>
  );
};

export const StaticProperties: RenderOverviewCellComponent = ({ cell, setOverlayContent, data }) => {
  const templates = useProductsSelector().properties;

  const availableProperties = useMemo(() => {
    return templates.find(t => t._id === data?.template?._id)?.childrenList?.filter(prop => !prop.isSelectable);
  }, [data?.template?._id, templates]);

  const selectedItems = useMemo(() => {
    return data?.properties?.map(p => p._id);
  }, [data?.properties]);

  const renderProperties = useMemo(() => {
    return availableProperties?.map((prop, index) => {
      return (
        <OverviewPropertyComponent
          key={`prop-${prop?._id}`}
          {...{ index, setOverlayContent, item: prop, selectedItems }}
        ></OverviewPropertyComponent>
      );
    });
  }, [availableProperties, setOverlayContent, selectedItems]);

  return (
    <Cell
      padding={'4px 4px 8px'}
      gap={8}
      style={{ minHeight: renderProperties && renderProperties?.length > 0 ? 'max-content' : 50 }}
    >
      <FlexBox alignItems={'center'} fxDirection={'row'} justifyContent={'space-between'} gap={8}>
        <CellText $isTitle $size={12}>
          {cell?.title}
        </CellText>

        <OverlayOpenButton
          type={'button'}
          onClick={() => {
            setOverlayContent({ RenderComponent: FormSelectProperties, props: { update: data?._id } });
          }}
        >
          {'Змінити'}
        </OverlayOpenButton>
      </FlexBox>

      <FlexBox
        fillWidth
        gap={8}
        className={'PROPERTIES_LIST'}
        alignItems={renderProperties && renderProperties?.length > 0 ? 'stretch' : 'flex-end'}
      >
        {renderProperties && renderProperties?.length > 0 ? (
          renderProperties
        ) : (
          <CellText $weight={500}>{'не визначено'}</CellText>
        )}
      </FlexBox>
    </Cell>
  );
};

const OverviewPropertyComponent: React.FC<OverviewPropertyComponentProps> = ({ item, selectedItems }) => {
  const renderValues = useMemo(() => {
    return item.childrenList
      ?.filter(el => selectedItems?.includes(el._id))
      ?.map((value, index) => {
        return (
          <CategoryItem key={`prop-v-${value._id}`} maxWidth={'130px'}>
            {value.label}
          </CategoryItem>
        );
      });
  }, [item.childrenList, selectedItems]);

  return (
    <FlexBox className={'PROPERTY'} gap={8} alignItems={'flex-end'}>
      <FlexBox alignItems={'center'} fxDirection={'row'} fillWidth gap={8}>
        <CellText $size={14} $weight={600}>
          {item?.label}
        </CellText>
      </FlexBox>

      <FlexBox fxDirection={'row-reverse'} flexWrap={'wrap'} fillWidth gap={8}>
        {renderValues && renderValues?.length > 0 ? renderValues : <Text $size={12}>{'---'}</Text>}
      </FlexBox>
    </FlexBox>
  );
};

const OverlayOpenButton = styled.button`
  display: flex;
  align-items: center;

  border: 0;
  background-color: transparent;

  font-family: inherit;
  font-weight: 600;
  font-size: 12px;
  padding: 0 6px;
  color: ${p => p.theme.accentColor.base};

  cursor: pointer;
`;

const Cell = styled(FlexBox)`
  min-height: 50px;
  height: max-content;

  padding: 4px;
  gap: 4px;

  //overflow: hidden;

  &:not(:first-child) {
    border-top: 1px solid ${p => p.theme.sideBarBorderColor};
  }
`;

const CellText = styled(Text)<{ $isTitle?: boolean }>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 100%;

  color: ${p =>
    p.$isTitle
      ? p.theme.globals.inputPlaceholderColor
      : p.$disabled
      ? p.theme.globals.inputPlaceholderColor
      : undefined};
`;
const ImagesSetBox = styled(FlexBox)`
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const CategoryItem = styled(FlexBox)`
  align-items: center;
  justify-content: center;

  flex-direction: row;

  padding: 4px 12px;

  font-weight: 500;
  font-size: 12px;
  color: ${p => p.theme.fontColorSidebar};

  min-height: 28px;

  border-radius: 2px;
  background-color: ${p => p.theme.field.backgroundColor};
  //border: 1px solid ${p => p.theme.accentColor.base};
`;
