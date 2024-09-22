/**
 * Generated by orval v7.0.1 🍺
 * Do not edit manually.
 * gift-sync-back-end
 * OpenAPI spec version: 1.0.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import type {
  CreateRoomRequestApiDTO,
  ErrorResponseApiDTO,
  InviteUserRequestApiDTO,
  InviteUserResponseApiDTO,
  JoinRoomRequestApiDTO,
  JoinRoomResponseApiDTO,
  RoomAttributesApiDTO,
} from './Api.schemas';
import { customInstance } from '../customInstance';
import type { ErrorType, BodyType } from '../customInstance';

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const createRoom = (
  createRoomRequestApiDTO: BodyType<CreateRoomRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RoomAttributesApiDTO>(
    {
      url: `/room/create`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: createRoomRequestApiDTO,
    },
    options,
  );
};

export const getCreateRoomMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createRoom>>,
    TError,
    { data: BodyType<CreateRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createRoom>>,
  TError,
  { data: BodyType<CreateRoomRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createRoom>>,
    { data: BodyType<CreateRoomRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return createRoom(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreateRoomMutationResult = NonNullable<
  Awaited<ReturnType<typeof createRoom>>
>;
export type CreateRoomMutationBody = BodyType<CreateRoomRequestApiDTO>;
export type CreateRoomMutationError = ErrorType<ErrorResponseApiDTO>;

export const useCreateRoom = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createRoom>>,
    TError,
    { data: BodyType<CreateRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof createRoom>>,
  TError,
  { data: BodyType<CreateRoomRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getCreateRoomMutationOptions(options);

  return useMutation(mutationOptions);
};
export const inviteUser = (
  inviteUserRequestApiDTO: BodyType<InviteUserRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<InviteUserResponseApiDTO>(
    {
      url: `/room/invite-user`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: inviteUserRequestApiDTO,
    },
    options,
  );
};

export const getInviteUserMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof inviteUser>>,
    TError,
    { data: BodyType<InviteUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof inviteUser>>,
  TError,
  { data: BodyType<InviteUserRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof inviteUser>>,
    { data: BodyType<InviteUserRequestApiDTO> }
  > = (props) => {
    const { data } = props ?? {};

    return inviteUser(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type InviteUserMutationResult = NonNullable<
  Awaited<ReturnType<typeof inviteUser>>
>;
export type InviteUserMutationBody = BodyType<InviteUserRequestApiDTO>;
export type InviteUserMutationError = ErrorType<ErrorResponseApiDTO>;

export const useInviteUser = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof inviteUser>>,
    TError,
    { data: BodyType<InviteUserRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof inviteUser>>,
  TError,
  { data: BodyType<InviteUserRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getInviteUserMutationOptions(options);

  return useMutation(mutationOptions);
};
export const joinRoom = (
  token: string,
  joinRoomRequestApiDTO: BodyType<JoinRoomRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<JoinRoomResponseApiDTO>(
    {
      url: `/room/join/${token}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: joinRoomRequestApiDTO,
    },
    options,
  );
};

export const getJoinRoomMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof joinRoom>>,
    TError,
    { token: string; data: BodyType<JoinRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof joinRoom>>,
  TError,
  { token: string; data: BodyType<JoinRoomRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof joinRoom>>,
    { token: string; data: BodyType<JoinRoomRequestApiDTO> }
  > = (props) => {
    const { token, data } = props ?? {};

    return joinRoom(token, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type JoinRoomMutationResult = NonNullable<
  Awaited<ReturnType<typeof joinRoom>>
>;
export type JoinRoomMutationBody = BodyType<JoinRoomRequestApiDTO>;
export type JoinRoomMutationError = ErrorType<ErrorResponseApiDTO>;

export const useJoinRoom = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof joinRoom>>,
    TError,
    { token: string; data: BodyType<JoinRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof joinRoom>>,
  TError,
  { token: string; data: BodyType<JoinRoomRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getJoinRoomMutationOptions(options);

  return useMutation(mutationOptions);
};
export const deleteRoom = (
  roomId: string,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RoomAttributesApiDTO>(
    { url: `/room/delete/${roomId}`, method: 'DELETE' },
    options,
  );
};

export const getDeleteRoomMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteRoom>>,
    TError,
    { roomId: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof deleteRoom>>,
  TError,
  { roomId: string },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof deleteRoom>>,
    { roomId: string }
  > = (props) => {
    const { roomId } = props ?? {};

    return deleteRoom(roomId, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type DeleteRoomMutationResult = NonNullable<
  Awaited<ReturnType<typeof deleteRoom>>
>;

export type DeleteRoomMutationError = ErrorType<ErrorResponseApiDTO>;

export const useDeleteRoom = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof deleteRoom>>,
    TError,
    { roomId: string },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof deleteRoom>>,
  TError,
  { roomId: string },
  TContext
> => {
  const mutationOptions = getDeleteRoomMutationOptions(options);

  return useMutation(mutationOptions);
};
export const updateRoom = (
  roomId: string,
  createRoomRequestApiDTO: BodyType<CreateRoomRequestApiDTO>,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<RoomAttributesApiDTO>(
    {
      url: `/room/update/${roomId}`,
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      data: createRoomRequestApiDTO,
    },
    options,
  );
};

export const getUpdateRoomMutationOptions = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateRoom>>,
    TError,
    { roomId: string; data: BodyType<CreateRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof updateRoom>>,
  TError,
  { roomId: string; data: BodyType<CreateRoomRequestApiDTO> },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof updateRoom>>,
    { roomId: string; data: BodyType<CreateRoomRequestApiDTO> }
  > = (props) => {
    const { roomId, data } = props ?? {};

    return updateRoom(roomId, data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type UpdateRoomMutationResult = NonNullable<
  Awaited<ReturnType<typeof updateRoom>>
>;
export type UpdateRoomMutationBody = BodyType<CreateRoomRequestApiDTO>;
export type UpdateRoomMutationError = ErrorType<ErrorResponseApiDTO>;

export const useUpdateRoom = <
  TError = ErrorType<ErrorResponseApiDTO>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof updateRoom>>,
    TError,
    { roomId: string; data: BodyType<CreateRoomRequestApiDTO> },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseMutationResult<
  Awaited<ReturnType<typeof updateRoom>>,
  TError,
  { roomId: string; data: BodyType<CreateRoomRequestApiDTO> },
  TContext
> => {
  const mutationOptions = getUpdateRoomMutationOptions(options);

  return useMutation(mutationOptions);
};
export const getRoomById = (
  roomId: string,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<RoomAttributesApiDTO>(
    { url: `/room/${roomId}`, method: 'GET', signal },
    options,
  );
};

export const getGetRoomByIdQueryKey = (roomId: string) => {
  return [`/room/${roomId}`] as const;
};

export const getGetRoomByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getRoomById>>,
  TError = ErrorType<ErrorResponseApiDTO>,
>(
  roomId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getRoomById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
) => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetRoomByIdQueryKey(roomId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getRoomById>>> = ({
    signal,
  }) => getRoomById(roomId, requestOptions, signal);

  return {
    queryKey,
    queryFn,
    enabled: !!roomId,
    ...queryOptions,
  } as UseQueryOptions<
    Awaited<ReturnType<typeof getRoomById>>,
    TError,
    TData
  > & { queryKey: QueryKey };
};

export type GetRoomByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getRoomById>>
>;
export type GetRoomByIdQueryError = ErrorType<ErrorResponseApiDTO>;

export function useGetRoomById<
  TData = Awaited<ReturnType<typeof getRoomById>>,
  TError = ErrorType<ErrorResponseApiDTO>,
>(
  roomId: string,
  options: {
    query: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getRoomById>>, TError, TData>
    > &
      Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getRoomById>>,
          TError,
          TData
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customInstance>;
  },
): DefinedUseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetRoomById<
  TData = Awaited<ReturnType<typeof getRoomById>>,
  TError = ErrorType<ErrorResponseApiDTO>,
>(
  roomId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getRoomById>>, TError, TData>
    > &
      Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getRoomById>>,
          TError,
          TData
        >,
        'initialData'
      >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };
export function useGetRoomById<
  TData = Awaited<ReturnType<typeof getRoomById>>,
  TError = ErrorType<ErrorResponseApiDTO>,
>(
  roomId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getRoomById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey };

export function useGetRoomById<
  TData = Awaited<ReturnType<typeof getRoomById>>,
  TError = ErrorType<ErrorResponseApiDTO>,
>(
  roomId: string,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof getRoomById>>, TError, TData>
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getGetRoomByIdQueryOptions(roomId, options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
