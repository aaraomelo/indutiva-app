import { useEffect } from 'react';
import { connect } from 'react-redux';
import { maskBRL } from '../../store/masks';
import { getProducts, setProductsSearch } from '../../store/products/actionCreators';
import './ProductsTable.css';

type Props = MapStateToPropsTypes & MapDispatchToPropsTypes;

function ProductsTable({ init, products, searchProducts }: Props) {
  useEffect(() => {
    init()
  }, [])

  return (
    <div id="form-main-container">
      <div id="form-area">
        <div id="form-title">
          Lista de Produtos
        </div>
        <input
          type="text"
          className={'input-search'}
          placeholder="Buscar produto"
          onChange={(event: any) => {
            searchProducts(event.target.value)
          }}
        />
        <table>
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Descrição</th>
              <th scope="col">Valor</th>
              <th scope="col">Imagem</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => (
                <tr>
                  <td data-label="Título">{product.title}</td>
                  <td data-label="Descrição">{product.description}</td>
                  <td data-label="Valor">{maskBRL(product.value)}</td>
                  <td data-label="Imagem">
                    <img
                      src={product.image}
                      alt={product.title}
                      width="100%"
                      height="100%"
                    />
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface MapStateToPropsTypes {
  products: IProduct[]
}

interface MapDispatchToPropsTypes {
  init: () => Promise<any>
  searchProducts: (search: string) => void
}

function mapStateToProps(state: any) {
  return {
    products: state.productsState.search
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    init: () => dispatch(getProducts()),
    searchProducts: (search: string) => dispatch(setProductsSearch({ search }))
  }
}

export default connect<MapStateToPropsTypes, MapDispatchToPropsTypes>(
  mapStateToProps,
  mapDispatchToProps)
  (ProductsTable);
