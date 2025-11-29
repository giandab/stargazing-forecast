export default async function calculation(cloud_cover:Float32Array) {

    // console.log(cloud_cover)
    const percentage_cover_at_night = (cloud_cover[cloud_cover.length -1] + cloud_cover[cloud_cover.length -2])/2
    // console.log(percentage_cover_at_night)

    return percentage_cover_at_night
    
}