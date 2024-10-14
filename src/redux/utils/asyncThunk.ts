import {
  AsyncThunk,
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
  createAsyncThunk as cAT,
} from '@reduxjs/toolkit';
import { RootState } from './reduxHelpers';

export function createAsyncThunk<Returned, ThunkArg = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, { state: RootState }>,
  options?: AsyncThunkOptions<ThunkArg, { state: RootState }>
): AsyncThunk<Returned, ThunkArg, { state: RootState }> {
  return cAT(typePrefix, payloadCreator, options);
}
