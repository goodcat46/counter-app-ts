import { RenderOverviewCellComponent } from './overview-types';
import { CellStyledComp } from './CellStyles';
import { OverviewCellHeader } from './OverviewCellHeader';
import FormCreateVariation from '../../Forms/offers/FormOfferVariation/FormCreateVariationOverlay';
import FlexBox from '../../atoms/FlexBox';
import React from 'react';

export const OfferOverviewVariationsTemplateCell: RenderOverviewCellComponent = ({ cell, setOverlayContent, data }) => {
  return (
    <CellStyledComp.Cell padding={'4px'}>
      <OverviewCellHeader
        title={cell.title}
        openOverlayButtonTitle={'Перегляд'}
        onOpenOverlayPress={() => {
          setOverlayContent({ RenderComponent: FormCreateVariation, props: { create: true } });
        }}
      />

      <FlexBox
        fillWidth
        fxDirection={'row'}
        gap={8}
        height={'24px'}
        justifyContent={'flex-end'}
        alignItems={'flex-end'}
        overflow={'hidden'}
      >
        <CellStyledComp.CellText
          $disabled={!data?.template?.label}
          $weight={500}
        >{`${data?.template?.label}`}</CellStyledComp.CellText>
      </FlexBox>
    </CellStyledComp.Cell>
  );
};
