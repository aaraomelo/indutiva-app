import { connect } from 'react-redux';
import classNames from 'classnames';
import { postProduct, setProductFormField, validateProductForm } from '../../store/products/actionCreators';
import Field from './Field/Field';
import './ProductForm.css';
import { maskBRL, unmaskBRL } from '../../store/masks';
import Button from './Button/Button';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function ProductForm({
  post,
  getForm,
  setForm,
  getValidations,
  validateForm,
  isValidForm,
  getStatus
}: Props) {
  return (
    <div id="form-main-container">
      <div id="form-area">
        <div id="form-title">
          Cadastre um produto
        </div>
        <div id="form-body">
          <div>
            <Field
              id={'title'}
              type={'text'}
              label={'Título'}
              value={getForm().title}
              onChange={(event: any) =>
                setForm('title', event?.target.value.toUpperCase())
              }
              errorMessages={getValidations('title')}
              onBlur={() => validateForm('title')}
            />
            <Field
              id={'description'}
              type={'text'}
              label={"Descrição"}
              value={getForm().description}
              onChange={(event: any) =>
                setForm('description', event?.target.value)
              }
              errorMessages={getValidations('description')}
              onBlur={() => validateForm('description')}
            />
            <Field
              id={'value'}
              type={'text'}
              label={"Preço"}
              value={maskBRL(getForm().value)}
              onChange={(event: any) =>
                setForm('value', unmaskBRL(event?.target.value))
              }
              errorMessages={getValidations('value')}
              onBlur={() => validateForm('value')}
            />
            <Field
              id={'image'}
              type={'text'}
              label={"Imagem"}
              value={getForm().image}
              onChange={(event: any) =>
                setForm('image', event?.target.value)
              }
              errorMessages={getValidations('image')}
              onBlur={() => validateForm('image')}
            />
          </div>
          <div>
            <Button
              title={getStatus.pending ? 'Aguarde' : 'Enviar'}
              waiting={getStatus.pending}
              onClick={() => {
                validateForm()
                isValidForm && post()
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface MapStateToPropsTypes {
  getForm: () => IProduct
  getValidations: (field: string) => string[]
  isValidForm: boolean
  getStatus: IRequest
}

interface MapDispatchToPropsTypes {
  post: () => Promise<any>
  setForm: (field: string, value: any) => void
  validateForm: (field?: string) => void
}

function mapStateToProps(state: any) {
  return {
    getForm: () => state.productsState.productForm,
    getValidations: (field: string) => state.productsState.validations[field],
    isValidForm: state.productsState.isValidProduct,
    getStatus: state.productsState.requests.postProduct
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setForm: (field: string, value: any) => dispatch(setProductFormField({ field, value })),
    validateForm: (field?: string) => dispatch(validateProductForm({ field: field })),
    post: () => dispatch(postProduct()),
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (ProductForm);

