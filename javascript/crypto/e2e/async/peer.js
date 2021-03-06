// Copyright 2012 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A Peer is a part of a group of peers that wish to communicate.
 * @author evn@google.com (Eduardo Vela)
 */

goog.provide('e2e.async.Peer');
goog.provide('e2e.async.Peer.Message');

goog.require('e2e.async.Broker');



/**
 * A peer among other things, handles the communication among a group of peers.
 * @extends {e2e.async.Broker}
 * @constructor
 */
e2e.async.Peer = function() {
  goog.base(this, []);
};
goog.inherits(e2e.async.Peer, e2e.async.Broker);


/**
 * Messages used by Peers.
 * @enum {string}
 */
e2e.async.Peer.Message = {
  'INIT': 'INIT'
};
