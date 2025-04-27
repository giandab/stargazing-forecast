export default async function calculation(cloud_cover:Float32Array) {

    console.log(cloud_cover)
    const percentage_cover_at_night = (cloud_cover[cloud_cover.length -1] + cloud_cover[cloud_cover.length -2])/2
    console.log(percentage_cover_at_night)

    if (percentage_cover_at_night<25){
        return "Good"
    }
    else if ((percentage_cover_at_night>25)&&(percentage_cover_at_night<50)){
        return "Average"
    }
    else{
        return "Poor"
    }
    
}