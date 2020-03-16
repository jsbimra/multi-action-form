import { namespaced, merge } from 'overmind/config';
import { createHook } from 'overmind-react';

import { state } from './state';
import * as rsvp from './rsvp';

export const config = merge(
    {
        state
    },
    namespaced({
        rsvp
    })
)   

// export const config = {
//     state
// }

export const useOvermind = createHook()
