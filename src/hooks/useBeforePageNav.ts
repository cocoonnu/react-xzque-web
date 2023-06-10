// import { useEffect } from 'react'
// import useGetUserInfo from './useGetUserInfo'
// import { useLocation, useNavigate } from 'react-router-dom'

// const useBeforePageNav = (userInfoLoading: boolean) => {
//     const nav = useNavigate()
//     const { isLogin } = useGetUserInfo()
//     const { pathname } = useLocation()
//     const mustLoginPages = ['manage', 'question']
//     const loginRegPages = ['login', 'register']

//     useEffect(() => {
//         if (userInfoLoading) {
//             console.log(23213)
            
//             return
//         }

//         if (!isLogin) {
//             mustLoginPages.forEach(item => {
//                 if (pathname.includes(item)) {
//                     nav('/login')
//                     return
//                 }
//             })
//         }

//         if (isLogin) {
//             loginRegPages.forEach(item => {
//                 if (pathname.includes(item)) {
//                     nav('/')
//                     return
//                 }
//             })
//         }

//     }, [pathname, userInfoLoading, isLogin])
// }

// export default useBeforePageNav
export const aa = 0