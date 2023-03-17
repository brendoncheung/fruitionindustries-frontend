import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class RouteStrategy implements RouteReuseStrategy {

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle | null): void {
        return
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return false
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        console.log(curr.routeConfig?.path)

        return curr.routeConfig?.path === 'show-terminal'
    }
    
}