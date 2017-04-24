/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule RelayCompatTypes
 * @flow
 */

'use strict';

import type {RelayEnvironmentInterface as RelayClassicEnvironment} from 'RelayEnvironment';
import type {Environment} from 'RelayStoreTypes';

export type CompatEnvironment = Environment | RelayClassicEnvironment;