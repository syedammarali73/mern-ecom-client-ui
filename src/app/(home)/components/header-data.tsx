import Header from "@/components/ui/custom/header";

export default async function HeaderData() {
    const tenantsResponse = await fetch(
        `${process.env.BACKEND_URL}/api/auth/tenants?perPage=100`,
        {
            next: { revalidate: 3600 },
        }
    );

    if (!tenantsResponse.ok) {
        throw new Error('Unable to load tenants');
    }

    const result = await tenantsResponse.json();


    return <Header tenants={result.data} />;
}