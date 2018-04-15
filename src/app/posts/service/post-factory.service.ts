import { PostsService } from "./posts.service";
import { LoginService } from "../../login/service/login.service";
import { HttpClient } from "@angular/common/http";
import { IAppProvider } from '../../appProvider/IappProvider';

export function postFactory(loginService: LoginService, http: HttpClient, appValues: IAppProvider) {
    return new PostsService(loginService.isLoggedIn, http, appValues);
}