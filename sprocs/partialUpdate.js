/* global __ */

/* eslint-disable
  max-statements,
  no-param-reassign,
  prefer-rest-params,
  prefer-template
*/

/**
 * Runs a partial update on a document
 * @param  {Object} newDoc         The document to update
 * @param  {Object} newDoc.id      The ID of the document to update
 * @return {undefined} No return
 */
function update(newDoc) { // eslint-disable-line func-style, no-unused-vars

  // polyfill for Object.assign()
  if (typeof Object.assign !== 'function') {
    Object.assign = function assign(target) {
      'use strict';
      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];
        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
  }

  const response = __.response;
  const docLink = __.getAltLink() + '/docs/' + newDoc.id;

  const accepted = __.readDocument(docLink, function readDocument(err, doc) {
    if (err) throw err;

    Object.assign(doc, newDoc);

    const accepted = __.upsertDocument(__.getSelfLink(), doc, function upsertDocument(err, res) {
      if (err) throw err;
      response.setBody(res);
    });

    if (!accepted) throw new Error('Timeout upserting document.');

  });

  if (!accepted) throw new Error('Timeout reading document.');

}
