'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <h1>Invoice Client App</h1>
        </div>
        <nav>
          <div className="navigation">
            <ul className="nav nav-tabs nav-justified">
              <li role="presentation" className="active"><a href="index.html">Create Invoice</a></li>
              <li role="presentation"><a href="searchInvoice.html">Search Invoice</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
