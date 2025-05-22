import UserAnalytics from ""
import RevenueMetrics from ""
import Notifications from ""

export default function ComplexDashboardLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return(
        <>
        <div>{children}</div>
        <UserAnalytics/>
        <RevenueMetrics/>
        <Notifications/>
        </>
    )
}