type AvailablePermissions = "read" | "write" | "delete" | "edit" | "admin"
type ExcludedPermissions = "admin" | "edit"

type FilteredPermissions = Exclude<AvailablePermissions, ExcludedPermissions>

const userPermissions: FilteredPermissions[] = ["read", "write", "delete"]
