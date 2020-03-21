import { namespaced, merge } from 'overmind/config';
import { createHook } from 'overmind-react';

import { state } from './state';
import * as actions from './actions';
import * as rsvp from './rsvp';

export const config = merge(
    {
        state,
        actions
    },
    namespaced({
        rsvp
    })
)   

// export const config = {
//     state
// }

export const useOvermind = createHook()
