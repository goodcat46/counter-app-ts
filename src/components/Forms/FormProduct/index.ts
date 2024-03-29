import { lazy } from 'react';

export { default as FormCreateProduct } from './FormCreateProduct';
export { default as FormAddImageSet } from './FormAddImageSet';
export { default as FormCreateProductImagesComponent } from './components/FormProductImagesComponent';
export { default as FormProductStaticProperties } from './FormProductStaticProperties';

export const LazyFormCreateProduct = lazy(() => import('./FormCreateProduct'));
export const LazyFormAddImageSet = lazy(() => import('./FormAddImageSet'));
export const LazyFormCreateProductImagesComponent = lazy(() => import('./components/FormProductImagesComponent'));
export const LazyFormProductStaticProperties = lazy(() => import('./FormProductStaticProperties'));
