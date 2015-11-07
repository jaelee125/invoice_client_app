'use strict';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <h1>Invoice Client App</h1>
        </div>
        <nav>
          <div>
            <ul>
              <li><a href="../public/index.html">Search</a></li>
              <li><a href="#">Invoices</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
