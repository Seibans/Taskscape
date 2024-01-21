import { OrganizationList } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
	return (
		<OrganizationList
		// esto oculta mi usuario y solo uestra las organizaciones
			hidePersonal
			afterSelectOrganizationUrl={"/organization/:id"}
			afterCreateOrganizationUrl={"/organization/:id"}
		/>
	);
};