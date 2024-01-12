// import { useSelector } from 'react-redux';
// import { Navigate, useLocation } from 'react-router-dom';

// import { useMemo } from 'react';
// import { getAuthData } from 'entities/User';
// import { getUserRoles } from 'entities/User/model/selectors/getAuthData/getAuthData';
// import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// export interface RequireAuthProps {
//   children: JSX.Element;
//   roles?: any[];
// }
// export function RequireAuth ({ children, roles }: RequireAuthProps) {
//   const auth = useSelector(getAuthData);
//   const location = useLocation();
//   const userRoles = useSelector(getUserRoles);

//   const hasRequiredRoles = useMemo(() => {
//     if (!roles) {
//       return true;
//     }
//     return roles.some((requiredRole) => {
//       const hasRole = userRoles?.includes(requiredRole);
//       return hasRole;
//     });
//   }, [roles, userRoles]);

//   if (!auth) {
//     return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
//   }
//   if (!hasRequiredRoles) {
//     return <Navigate to={RoutePath.not_found} state={{ from: location }} replace />;
//   }

//   return children;
// }
