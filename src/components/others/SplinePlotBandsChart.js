import React, { Component } from 'react';
import Highcharts from 'highcharts';
import {
    HighchartsChart, Chart, HighchartsProvider, XAxis, YAxis, Title, Subtitle, PlotBand, Legend, SplineSeries, Tooltip
} from 'react-jsx-highcharts';




class App extends Component {

    renderPlotBand = (band, index) => {
        const { from, to } = band;
        const id = `${from}-${to}`;
        const color = (index % 2) ? '#FFFFFF' : 'rgba(68, 170, 213, 0.1)';
        return (
            <PlotBand key={id} from={from} to={to} color={color}>
                <PlotBand.Label>{band.label}</PlotBand.Label>
            </PlotBand>
        );
    }

    render() {

        let date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

        // request a weekday along with a long date
        let options = { month: 'long', day: 'numeric' };
        // let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        console.log(date.toLocaleString('pl-PL', options));
        // → "Donnerstag, 20. Dezember 2012"
        let myDate = date.toLocaleString('pl-PL', options)
        //==============================================================


        var highchartsOptions = Highcharts.setOptions({
            lang: {
                // loading: 'Aguarde...',
                // months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                weekdays: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
                shortMonths: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
                // shortMonths: ['Sty', 'Lut', 'Marz', 'Kwie', 'Maj', 'Czer', 'Lip', 'Sierp', 'Wrze', 'Paź', 'List', 'Gru'],
                // exportButtonTitle: "Exportar",
                // printButtonTitle: "Imprimir",
                // rangeSelectorFrom: "De",
                // rangeSelectorTo: "Até",
                // rangeSelectorZoom: "Periodo",
                // downloadPNG: 'Download imagem PNG',
                // downloadJPEG: 'Download imagem JPEG',
                // downloadPDF: 'Download documento PDF',
                // downloadSVG: 'Download imagem SVG'
                //===============================
                // resetZoom: "Reset",
                // resetZoomTitle: "Reset,
                // thousandsSep: ".",
                // decimalPoint: ','
            }
        }
        );



        //==============================================================
        const plotOptions = {
            spline: {
                lineWidth: 4,

                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
                pointInterval: 36000000, //    3600000, // one hour
                pointStart: Date.UTC(2020, 2, 31, 0, 0, 0),
                // pointStart: myDate
                // pointStart: Date.UTC(2012, 11, 20, 3, 0, 0).toLocaleString('pl-PL', { month: 'long', day: 'numeric' })
            }
        };

        const bands = [
            { label: 'Light air', from: 0.5, to: 1.5 },
            { label: 'Light breeze', from: 1.5, to: 3.3 },
            { label: 'Gentle breeze', from: 3.3, to: 5.5 },
            { label: 'Moderate breeze', from: 5.5, to: 8 },
            { label: 'Fresh breeze', from: 8, to: 11 },
            { label: 'Strong breeze', from: 11, to: 14 },
            { label: 'High wind', from: 14, to: 15 }
        ];

        return (
            <div className="app">
                <HighchartsProvider Highcharts={Highcharts}>
                    <HighchartsChart plotOptions={plotOptions}>
                        <Chart type="spline" />

                        <Title>Wind speed during two days</Title>

                        <Subtitle>May 31 and and June 1, 2015 at two locations in Vik i Sogn, Norway</Subtitle>

                        <Legend />

                        <Tooltip valueSuffix=" m/s" />

                        <XAxis type="datetime">
                            <XAxis.Title>Time</XAxis.Title>
                        </XAxis>

                        <YAxis minorGridLineWidth={0} gridLineWidth={0} alternateGridColor={null}>
                            <YAxis.Title>Wind speed (m/s)</YAxis.Title>
                            <SplineSeries name="Hestavollane" data={[0.2, 0.8, 0.8, 0.8, 1, 1.3, 1.5, 2.9, 1.9, 2.6, 1.6, 3, 4, 3.6, 4.5, 4.2, 4.5, 4.5, 4, 3.1, 2.7, 4, 2.7, 2.3, 2.3, 4.1, 7.7, 7.1, 5.6, 6.1, 5.8, 8.6, 7.2, 9, 10.9, 11.5, 11.6, 11.1, 12, 12.3, 10.7, 9.4, 9.8, 9.6, 9.8, 9.5, 8.5, 7.4, 7.6]} />
                            <SplineSeries name="Vix" data={[0, 0, 0.6, 0.9, 0.8, 0.2, 0, 0, 0, 0.1, 0.6, 0.7, 0.8, 0.6, 0.2, 0, 0.1, 0.3, 0.3, 0, 0.1, 0, 0, 0, 0.2, 0.1, 0, 0.3, 0, 0.1, 0.2, 0.1, 0.3, 0.3, 0, 3.1, 3.1, 2.5, 1.5, 1.9, 2.1, 1, 2.3, 1.9, 1.2, 0.7, 1.3, 0.4, 0.3]} />
                            {bands.map(this.renderPlotBand)}
                        </YAxis>
                    </HighchartsChart>
                </HighchartsProvider>
            </div>
        );
    }
}

export default App;




// var highchartsOptions = Highcharts.setOptions({
//     lang: {
//         loading: 'Aguarde...',
//         months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
//         weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
//         shortMonths: ['Jan', 'Feb', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
//         exportButtonTitle: "Exportar",
//         printButtonTitle: "Imprimir",
//         rangeSelectorFrom: "De",
//         rangeSelectorTo: "Até",
//         rangeSelectorZoom: "Periodo",
//         downloadPNG: 'Download imagem PNG',
//         downloadJPEG: 'Download imagem JPEG',
//         downloadPDF: 'Download documento PDF',
//         downloadSVG: 'Download imagem SVG'
//         // resetZoom: "Reset",
//         // resetZoomTitle: "Reset,
//         // thousandsSep: ".",
//         // decimalPoint: ','
//     }
// }
// );