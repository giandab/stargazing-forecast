import calculation from "../../src/app/logic/qualityCalculation";

const goodResponse = new  Float32Array([
    54, 87, 90,  56, 97, 58,  83, 21,
    87, 39, 64, 100, 95, 93, 100, 85,
    78, 78, 72,  81, 92, 59,  0, 0
  ])

test('correctly identifies good forecast',async () => {
    const response = await calculation(goodResponse)
    expect(response).toBe("Good");
})