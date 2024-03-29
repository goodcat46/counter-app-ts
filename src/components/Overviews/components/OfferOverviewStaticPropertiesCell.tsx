import { RenderOverviewCellComponent } from './overview-types';
import { IProduct } from '../../../types/products.types';
import { useProductsSelector } from '../../../redux/selectors.store';
import React, { useMemo } from 'react';
import FormSelectPropertiesOverlay from '../../Forms/FormProduct/FormSelectPropertiesOverlay';
import FlexBox from '../../atoms/FlexBox';
import { t } from '../../../lang';
import { CellStyledComp } from './CellStyles';
import { OverviewCellHeader } from './OverviewCellHeader';
import { OverviewPropertyComponent } from './OverviewPropertyComponent';

export const OfferOverviewStaticProperties: RenderOverviewCellComponent<IProduct> = ({
  cell,
  setOverlayContent,
  data,
}) => {
  const templates = useProductsSelector().properties;

  const template = useMemo(() => {
    return templates.find(t => t._id === data?.template?._id);
  }, [data?.template?._id, templates]);

  const availableProperties = useMemo(() => {
    return template?.childrenList?.filter(prop => !prop.isSelectable);
  }, [template?.childrenList]);

  const selectedItems = useMemo(() => {
    return data?.properties?.map(p => p._id);
  }, [data?.properties]);

  const renderProperties = useMemo(() => {
    return availableProperties?.map((prop, index) => {
      return (
        <OverviewPropertyComponent
          key={`prop-${prop?._id}`}
          {...{ index, setOverlayContent, item: prop, selectedItems }}
        />
      );
    });
  }, [availableProperties, setOverlayContent, selectedItems]);

  // const renderPropertiesFromVariations = useMemo(() => {
  //   const propsFromVariations = data?.variations?.map(vr => vr.properties)?.flat(1);
  //
  //
  //   const valuesSet: Record<string, IPropertyValue> = Object.assign(
  //     {},
  //     ...(propsFromVariations?.map(value => (value ? { [value?._id]: value } : null)) ?? [])
  //   );
  //
  //   return Object.values(valuesSet).map(el => {
  //     return <FlexBox key={`prop_value_${el._id}`}>{el.label}</FlexBox>;
  //   });
  // }, [data?.variations]);

  return (
    <CellStyledComp.Cell
      padding={'4px 4px 8px'}
      gap={8}
      className={'PROPERTIES_LIST_CELL'}
      style={{ minHeight: renderProperties && renderProperties?.length > 0 ? 'max-content' : 50 }}
    >
      <OverviewCellHeader
        title={cell?.title}
        onOpenOverlayPress={() => {
          if (!template) return;

          setOverlayContent({
            RenderComponent: FormSelectPropertiesOverlay,
          });
        }}
      />

      <FlexBox fillWidth gap={8} alignItems={renderProperties && renderProperties?.length > 0 ? 'stretch' : 'flex-end'}>
        {renderProperties && renderProperties?.length > 0 ? (
          renderProperties
        ) : (
          <CellStyledComp.CellText $weight={500}>{t('undefined')}</CellStyledComp.CellText>
        )}

        {/*{renderPropertiesFromVariations}*/}
      </FlexBox>
    </CellStyledComp.Cell>
  );
};
