import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "./entity/user.entity";

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): UserEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
