import React, { Component } from "react";
import ProductListItem from "../components/ProductListItem";
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Alert,
  View
} from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ProductList from '../components/ProductList';
import * as productActionCreators from "../actionCreators/product";
let URI = "http://172.16.101.225:4000";
class ProductListWithFlatList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.actions.getProducts(this.props.page, this.props.limit);
  }

  onWishTapped = id => {
    const { actions } = this.props;
    actions.addToWishList(id);
  };

  _getProducts = (page = 1, limit = 8) => {
    this.props.actions.getProducts(page, limit);
  };

  _getMore = () => {
    this._getProducts(++this.props.page, this.props.limit);
  };

  _renderItem = ({ index, item }) => {
    return (
      <ProductListItem
        {...this.props}
        id={item.id}
        title={`${item.id} - ${item.title}`}
        image={item.image ? `${URI}/images/${item.image}` : null}
        rating={item.rating}
        price={item.price}
        wish={item.wish || false}
        onWishTapped={this.onWishTapped}
      />
    );
  };

  _keyExtractor = (item, index) => {
    return `${index}`;
  };

  _onRefresh = () => {
    //this.setState({ isRefreshing: true });
    this._getProducts();
  };

  _renderRefreshControl() {
    return (
      <RefreshControl
        onRefresh={this._onRefresh}
        refreshing={this.props.isRefreshing}
        tintColor={"#00ff80"}
        title={"Refreshing..."}
        titleColor={"#00ff80"}
      />
    );
  }

  /*  flat list supporting methods - END */

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {this.props.isLoading ? (
          <ActivityIndicator size="large" color="#00ff80" />
        ) : (
            <ProductList
              navigation={this.props.navigation}
              onRefresh={this._onRefresh}
              products={this.props.products}
              onWishTapped={this.onWishTapped}
              getMore={this._getMore}
              isRefreshing={this.props.isRefreshing}
            />
          )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productState.products,
    isLoading: state.productState.isLoading,
    isRefreshing: state.productState.isRefreshing,
    page: state.productState.page,
    limit: state.productState.limit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  ProductListWithFlatList
);
