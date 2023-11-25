import { Document, Page, View, Text, StyleSheet, Font, Image } from "@react-pdf/renderer";
import Dosis from "./Assets/fonts/Dosis-VariableFont_wght.ttf";
import DosisSemiBold from "./Assets/fonts/Dosis-SemiBold.ttf";
import DosisMedium from "./Assets/fonts/Dosis-Medium.ttf";
import CalendarIcon from "./Assets/Icons/icon-calendarTwo.png"
import { Fragment } from "react";


const styles = StyleSheet.create({
  styleFunction: {
    fontFamily: 'Dosis',
    fontSize: 14
  },
  functionCollaborator: {
    display: 'flex',
    flexDirection: 'column'
  },
  nameScale: {
    display: 'flex',
    textAlign: 'center'
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  }
})

Font.register({
  family: 'Dosis', fonts: [
    {
      src: Dosis,
    },
    {
      src: DosisSemiBold,
    },
    {
      src: DosisMedium
    }
  ]
})

interface IDaysDisplay {
  days: string[]
}

export const DayScalePDF = ({ days }: IDaysDisplay) => {

  const day = (nameEvent: string, dateTime: string, cameraOne: string, cameraTwo: string, cutDesk: string): JSX.Element => (
    <View style={{ margin: '10px' }}>
      <View style={{ marginBottom: '5px', display: 'flex', flexDirection: "row" }}>
        <Image src={String(CalendarIcon)} style={{ width: '15px', margin: '15px 15px 15px 0px' }} />
        <View style={{ width: 100 }}>
          <Text style={{ fontFamily: 'Dosis', fontSize: 17, fontWeight: 'bold' }}>{nameEvent}</Text>
          <Text style={{ fontFamily: 'Dosis', fontSize: 10, fontWeight: 'light' }}>{dateTime}</Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ marginRight: '20px' }}>
          <Text style={styles.styleFunction}>Camera 1</Text>
          <Text style={styles.styleFunction}>Camera 2</Text>
          <Text style={styles.styleFunction}>Mesa de corte</Text>
        </View>
        <View style={styles.functionCollaborator}>
          <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>{cameraOne}</Text>
          <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>{cameraTwo}</Text>
          <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>{cutDesk}</Text>
        </View>
      </View>
    </View>
  )
  const fourthElement = (days: JSX.Element[]): JSX.Element => (
    <Fragment>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {days}
      </View>
    </Fragment>
  )
  // const groupElements = (groupDays: JSX.Element[]) => (
  //   <Fragment>
  //     {groupDays}
  //   </Fragment>
  // )

  // console.log('REs ', Math.ceil(days.length / 4))

  let daysToRow: JSX.Element[] = []
  const allElements: JSX.Element[] = []

  const managerDisplayDays = (): JSX.Element => {

    let maxLengthRow = 4

    days.map((item, index) => {

      daysToRow.push(day("Missa por cura e libertação", "00/00/0000 às 00:00", "Chico", "Francisco Lucas", "Luana Silva"))

      // console.log('Day to row ', daysToRow)
      if (index === maxLengthRow - 1 || days.length - 1 === index) {
        if (index > (maxLengthRow * 3)) {

        } else {
          allElements.push(fourthElement(daysToRow))

          // console.log('All elements ', allElements)
          daysToRow = []

          maxLengthRow += maxLengthRow;
        }
      }
    })

    return <View style={{ display: 'flex', flexDirection: 'column' }}>
      {allElements}
    </View>
  }

  return managerDisplayDays()
}

export const ScalePDF = () => {

  // 18
  const elements = [
    'dskldksldarjeiufjp', 'fsrulfgio', 'fsrulfgio', 'fsrulfgio',
    'jskjks', 'dkslklsld', 'dskldksldarjeiufjp', 'fsrulfgio', 
    'jskjks', 'dkslklsld', 'dskldksldarjeiufjp', 'fsrulfgio', 
    'fsrulfgio', 'fsrulfgio'//, 'jskjks', 'dkslklsld', 
    // 'fsrulfgio', 'fsrulfgio'
  ]

  const managerQuantityDays = (days: string[]) => {
    let currentIndex = 0

    const elementsByPages: JSX.Element[] = []

    if (days.length >= 12) {
      while (currentIndex < days.length - 1) {
        currentIndex += 12;

        let elementsLimit = elements.filter((item, index) => { if (index <= (currentIndex - 1)) return item })

        console.log('Eleme ', elementsLimit)

        elementsByPages.push(<DayScalePDF days={elementsLimit} />)
        elementsLimit = []
      }
      return elementsByPages
    } else {
      return <DayScalePDF days={days} />
    }
  }

  return <Document>
    <Page size="A4" orientation="landscape" style={styles.body} wrap>
      <View>
        <Text style={{ marginBottom: '10px', display: 'flex', textAlign: 'center', color: '#0966BB', fontFamily: 'Dosis', fontSize: 18, fontWeight: "bold" }}>Escala mês de novembro</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }} wrap>
        {/* { managerQuantityDays(elements) } */}
        <DayScalePDF days={elements} />
      </View>
      {/* <View>
        <View style={{ marginBottom: '10px', display: 'flex', flexDirection: "row" }}>
          <Image src={String(CalendarIcon)} style={{ width: '15px', margin: '10px 10px 10px 0px' }} />
          <View>
            <Text style={{ fontFamily: 'Dosis', fontSize: 17, fontWeight: 'bold' }}>Missa dominical</Text>
            <Text style={{ fontFamily: 'Dosis', fontSize: 10, fontWeight: 'light' }}>00/00/000 às 00:00</Text>
          </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <View style={{ marginRight: '20px' }}>
            <Text style={styles.styleFunction}>Camera 1</Text>
            <Text style={styles.styleFunction}>Camera 2</Text>
            <Text style={styles.styleFunction}>Mesa de corte</Text>
          </View>
          <View style={styles.functionCollaborator}>
            <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>Chico 1</Text>
            <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>Chico 2</Text>
            <Text style={{ color: '#0966BB', fontFamily: 'Dosis', fontSize: 14, fontWeight: "bold" }}>Chico 3</Text>
          </View>
        </View>
      </View> */}
    </Page>
  </Document>
}
