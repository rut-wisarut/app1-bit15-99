//นำเข้า  วิว , ข้อความ  จาก  
import { Image, StyleSheet, Text, View } from 'react-native';

//ส่งออก เริ่มต้น    ฟังก์ชัน  ชื่อฟังก์ชัน
export default function App(){
    return (
        //    ใส่สไตล์ตกแต่ง
        <View style={myStyle.container}>
            
            {/* แสดงข้อความ */}
            <Text style={myStyle.title}>Witsarut</Text>

            {/* แสดงภาพจากไฟล์ */}
            <Image 
                source={require('@/assets/images/cat.jpeg')} 
                style={{
                    width: 200, // กว้าง
                    height: 200, // สูง
                    borderRadius: 100, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "lightyellow" // สีของขอบ
                }}
            />
            {/* ใส่ภาพจากลิงก์ */}
            <Image
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmYID-IQsGgS00u2Qr3hK8g60fcMvxOzUNuXZb5bTN3liOr3w5oZlIZU&s=10"}}
                style={{
                    width: 200, // กว้าง
                    height: 200, // สูง
                    borderRadius: 100, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "lightblue" // สีของขอบ
                }}
            />
            {/* จัดแนวนอน */}
            <View style={{flexDirection: "row"}}>
                {/* fn + e เปิดอิโมจิ */}
                <Text>Cat 🐱</Text> 
                <Text>Dog 🐶</Text>
                <Text>Duck 🦆</Text>
                <Text>Bird 🦅</Text>
                <Text>Fish 🐟</Text>
            </View>
        </View>
    )
}
const myStyle = StyleSheet.create({
    // สไตล์ของกล่อง
    container:{
        // css บนเว็บ -> background-color
        backgroundColor: "#ffe4e1", // สีพื้นหลัง
        flex: 1, // ขยาย
        paddingTop: 80, // เพิ่มช่องว่างด้านบนในกล่อง
        alignItems: "center"
    },
    title:{
        color: "blue", // สีอักษร
        fontSize: 26, // ขนาดอักษร
        fontWeight: 700, // ความหนาอักษร 
        textAlign: "center", //จัดแนวการวาง
    }
})