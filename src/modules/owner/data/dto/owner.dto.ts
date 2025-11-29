import {BaseResponse} from '../../../../shared/base';
import {Owner} from '../../domain/entities/owner';

export type GetOwnerResponse = BaseResponse<Owner[]>;
export type GetDetailOwnerResponse = BaseResponse<Owner>;
