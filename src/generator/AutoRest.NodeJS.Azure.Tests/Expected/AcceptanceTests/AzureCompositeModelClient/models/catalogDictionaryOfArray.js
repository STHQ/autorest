/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the CatalogDictionaryOfArray class.
 * @constructor
 * @member {object} [productDictionaryOfArray] Dictionary of Array of product
 *
 */
class CatalogDictionaryOfArray {
  constructor() {
  }

  /**
   * Defines the metadata of CatalogDictionaryOfArray
   *
   * @returns {object} metadata of CatalogDictionaryOfArray
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CatalogDictionaryOfArray',
      type: {
        name: 'Composite',
        className: 'CatalogDictionaryOfArray',
        modelProperties: {
          productDictionaryOfArray: {
            required: false,
            serializedName: 'productDictionaryOfArray',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ArrayElementType',
                  type: {
                    name: 'Sequence',
                    element: {
                        required: false,
                        serializedName: 'ProductElementType',
                        type: {
                          name: 'Composite',
                          className: 'Product'
                        }
                    }
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CatalogDictionaryOfArray;
