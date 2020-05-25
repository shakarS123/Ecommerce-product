import React, { Component } from "react";
import { getProductList } from "../Action/Index";
import { connect } from "react-redux";
import Card from "./Card";
import _ from "lodash";
import Pagination from "react-js-pagination";
import plainNotebook from "../Image/plainNotebook.jpg";
import { Modal, Button } from "react-bootstrap";
import bluetshirt from "../Image/bluetshirt.png";
import MugMockup1 from "../Image/MugMockup1.jpg";
import HardCoverbook from "../Image/HardCoverbook.jpg";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 100,
      page: 1,
      per_page: 8,
      show: false,
      Productcat: "",
      producttitle: "",
      saveprofile: [],
    };
  }
  componentWillMount() {
    this.props.getProductList();
  }

  handlePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ page: parseInt(pageNumber) });
  };

  handalclick = () => {
    this.setState({ show: !this.state.show });
  };
  hideModal = () => {
    this.setState({ show: false });
  };
  Productcat = (e) => {
    this.setState({ Productcat: e.target.value });
  };
  producttitle = (e) => {
    //console.log(e.target.value)
    this.setState({ producttitle: e.target.value });
  };
  saveprofile = (e) => {
    // console.log(this.state.Productcat + " " + this.state.producttitle)
    let listData = this.state.saveprofile;
    let objData = {
      name: this.state.Productcat,
      email: this.state.producttitle,
    };
    listData.push(objData);

    this.setState({ saveprofile: listData, show: false });
  };

  render() {
    let { list } = this.props;
    console.log(list);
    list =
      list.length > 0 &&
      list.filter((d) => {
        return d.price <= this.state.price;
      });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-left mt-2 mr-0">
              <h4>Products</h4>
            </div>
            <div className="col-sm-6 text-right">
              <button
                className="btn btn-danger mt-2 pb-2"
                onClick={this.handalclick}
              >
                Add Product
              </button>

              <Modal show={this.state.show} onHide={this.hideModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Product </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Product Category
                  <select name="cars" className="form-control mt-2 mb-2">
                    <option value="">Select</option>
                    <option value="Book">Book</option>
                    <option value="Plain Notebook">Plain Notebook</option>
                    <option value="T-shirt">T-shirt</option>
                  </select>
                  Product Title
                  <input
                    className="form-control mt-2"
                    placeholder="Enter product title"
                    onChange={(e) => {
                      this.producttitle(e);
                    }}
                  ></input>
                  Price
                  <input
                    className="form-control mt-2 mb-2"
                    placeholder="Enter price"
                    onChange={(e) => {
                      this.Productcat(e);
                    }}
                  ></input>
                  Top Products
                  <p className="mt-3">Uplaod Product Image</p>
                </Modal.Body>

                <Modal.Footer>
                  <Button variant="secondary" onClick={this.hideModal}>
                    CANCEL
                  </Button>
                  <Button
                    variant="danger"
                    className="text-white"
                    onClick={this.saveprofile}
                  >
                    SAVE
                  </Button>
                </Modal.Footer>
              </Modal>
              {this.state.saveprofile && this.state.saveprofile.length > 0
                ? this.state.saveprofile.map((data, index) => {
                    return (
                      <div className="row">
                        <div className="col-sm-3">{data.name}</div>
                        <div className="col-sm-3">{data.email}</div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="row mt-4">
              <div className="col-sm-4 text-left text-secondary mt-3">
                CATEGORIES
              </div>
              <div className="col-sm-5  text-secondar text-secondary mt-3">
                Showing 1-8 of 9 results
              </div>
              <div className="col-sm-3 btn-right mt-3">
                <select
                  name="cars"
                  className="form-control mt-2 mb-2 bg-secondary text-white "
                >
                  <option value=" Default Select"> Default Select</option>
                  <option value="Book">Book</option>
                  <option value="T-shart">T-shart</option>
                  <option value="Bag">Bag</option>
                </select>
              </div>
              <div className="row mt-3">
                <div className="col-sm-3 ">
                  <div className="row-sm-3 border-bottom bg-light p-3 text-left font-weight-bold">
                    Books
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3 text-left font-weight-bold">
                    Hoodie/T-shirt
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3 text-left font-weight-bold">
                    Bags
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3 text-left font-weight-bold">
                    Misc
                  </div>
                  <div className="row-sm-3 mt-4  "></div>
                  <div className="form-group text-secondary">
                    <label for="formControlRange ">FILTER BY PRICE</label>
                    <input
                      type="range"
                      className="form-control-range"
                      id="formControlRange"
                      min="1"
                      max="1000"
                      onChange={(e) => {
                        this.handlePrice(e);
                      }}
                    />
                  </div>
                  <div className="text-danger font-weight-bolder">
                    {this.state.price + "$   -  " + 1000 + "$"}
                  </div>
                  <div className="row-sm-3 text-secondary mt-5">
                    TOP PRODUCT
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3  font-weight-bold">
                    <img src={MugMockup1} className="productimage"></img>
                    Mug Mockups
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3 font-weight-bold">
                    <img src={bluetshirt} className="productimage"></img>
                    T-shirt blue
                    <div>⭐⭐⭐⭐⭐</div>
                  </div>
                  <div className="row-sm-3 border-bottom bg-light p-3 font-weight-bold">
                    <img src={HardCoverbook} className="productimage"></img>
                    Hard Coverbook ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <div className="col-sm-9 ">
                  <div className="row">
                    {list &&
                      list.length > 0 &&
                      _.map(
                        _.chain(list)
                          .slice(
                            (this.state.page - 1) * this.state.per_page,
                            this.state.page * this.state.per_page
                          )
                          .value(),
                        (data, index) => {
                          return (
                            <div className="col-sm-4 mb-3 ">
                              <Card
                                image={plainNotebook}
                                title={data.name}
                                price={data.price}
                              />
                            </div>
                          );
                        }
                      )}
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-between mb-4">
                    <div>
                      {list.length > 0 ? (
                        <div className="mb-2 font-rc">
                          Displaying product{" "}
                          {(this.state.page - 1) *
                            _.toInteger(this.state.per_page) +
                            1}{" "}
                          to{" "}
                          {this.state.per_page * _.toInteger(this.state.page) >
                          list.length
                            ? list.length
                            : this.state.per_page *
                              _.toInteger(this.state.page)}{" "}
                          of {list.length} in total records.
                        </div>
                      ) : (
                        <div className="mb-2 font-rc">
                          Displaying 0 results matching.
                        </div>
                      )}
                    </div>
                    <div>
                      {list.length > this.state.per_page ? (
                        <Pagination
                          innerClass="pagination custom-pagination"
                          activeClass="active"
                          itemClass="page-item"
                          linkClass="page-link"
                          activePage={_.toInteger(this.state.page)}
                          itemsCountPerPage={this.state.per_page}
                          totalItemsCount={list.length}
                          pageRangeDisplayed={5}
                          onChange={this.handlePageChange}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.ProductList,
});

export default connect(mapStateToProps, { getProductList })(Landing);
