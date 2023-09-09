import ModalForm, { ModalFormProps } from '../ModalForm';
import { useEffect, useState } from 'react';
import { useProductsSelector } from '../../redux/selectors.store';
import { IVariationTemplate } from '../../redux/products/properties.types';

export interface FormCreateVariationProps extends Omit<ModalFormProps, 'onSubmit'> {
  template?: IVariationTemplate;
  templateId?: string;
}
const FormCreateVariation: React.FC<FormCreateVariationProps> = ({ template, templateId, ...props }) => {
  const templates = useProductsSelector().properties;
  const [currentTemplate, setCurrentTemplate] = useState<IVariationTemplate>();

  useEffect(() => {
    if (templateId) {
      setCurrentTemplate(templates.find(t => t._id === templateId));
    }
  }, [templateId, templates]);
  return (
    <ModalForm width={'480px'} {...props}>
      FormCreateVariationProps
    </ModalForm>
  );
};

export default FormCreateVariation;
