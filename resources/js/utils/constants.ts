export const paths = {
    checkpoint_image : "/storage/checkpoint-image",
    checkpoint_badge : "/storage/checkpoint-badge",
    checkpoint_certificate: "/storage/checkpoint-certificate",
    instructor_photo_front : "/storage/instructor-photo-front",
    instructor_photo_back : "/storage/instructor-photo-back",
    organization_document: "/storage/organization-document",
    organization_logo: "/storage/organization-logo",
    images: "/storage/img",
    no_image: "/storage/img/no-image.png",
    default_logo : "/storage/img/default-logo.png",
    checkpoint_default_image: "/storage/img/checkpoint-default.jpg"
}
type Directory = "checkpoint-image" | "checkpoint-badge" | "checkpoint-certificate" | "instructor-photo-front"
            | "instructor-photo-back" | "organization-logo" | "organization-document"

export const storage = (directory:Directory, path?:string) => {
    const storage : string = "/storage/"
    if(directory == "checkpoint-badge" || directory == "checkpoint-certificate" || directory == "checkpoint-image")
        return storage + (path ? (directory + "/" + path) : "img/checkpoint-default.jpg")
    if(directory == "instructor-photo-back" || directory == "instructor-photo-front")
        return storage + (path ? (directory + "/" + path) : "img/no-image.png")
    else if(directory == "organization-logo")
        return storage + (path ? (directory + "/" + path) : "img/default-logo.png")
    else
        return storage + (path ? (directory + "/" + path) : "img/default-logo.png") 
}