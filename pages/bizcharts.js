import React from 'react'
import dynamic from 'next/dynamic'

// const DataSet = require('@antv/data-set');
// let bizcharts;
// let Slider;
// if (process.browser) {
//     bizcharts = require('bizcharts');
//     Slider = require('bizcharts-plugin-slider');
// }

const Slider = dynamic(() => import('bizcharts-plugin-slider'), { ssr: false })
const DataSet = dynamic(() => import('@antv/data-set'), { ssr: false })
const {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend,
} = dynamic(() => import('bizcharts'), { ssr: false })

import data from '../static/json/mock.json'

function getComponent(data) {
    const ds = new DataSet({
        state: {
            start: new Date("2009/7/20 0:00").getTime(),
            end: new Date("2009/9/9 0:00").getTime()
        }
    });

    const dv = ds.createView("origin").source(data);
    dv.transform({
        type: "filter",

        callback(obj) {
            const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较

            return time >= ds.state.start && time <= ds.state.end;
        }
    });

    let chart;

    class SliderChart extends React.Component {
        onChange(obj) {
            const { startValue, endValue } = obj;
            ds.setState("start", startValue);
            ds.setState("end", endValue);
        }

        render() {

            const scale = {
                time: {
                    type: "time",
                    tickCount: 8,
                    mask: "m/dd hh:MM"
                },
                flow: {
                    alias: "流量(m^3/s)"
                },
                rain: {
                    alias: "降雨量(mm)"
                }
            };

            return (
                <div>
                    {process.browser &&
                        <Chart
                            height={window.innerHeight - 50}
                            data={dv}
                            padding={[40, 40, 40, 80]}
                            scale={scale}
                            onGetG2Instance={g2Chart => {
                                g2Chart.animate(false);
                                chart = g2Chart;
                            }}
                            forceFit
                        >
                            <Axis name="rain" grid={null} />
                            <Axis name="flow" title />
                            <Tooltip />
                            <Legend
                                custom
                                position="top"
                                items={[
                                    {
                                        value: "flow",
                                        marker: {
                                            symbol: "circle",
                                            fill: "l(100) 0:#a50f15 1:#fee5d9",
                                            radius: 5
                                        }
                                    },
                                    {
                                        value: "rain",
                                        marker: {
                                            symbol: "circle",
                                            fill: "l(100) 0:#293c55 1:#f7f7f7",
                                            radius: 5
                                        }
                                    }
                                ]}
                                onClick={ev => {
                                    const item = ev.item;
                                    const value = item.value;
                                    const checked = ev.checked;
                                    const geoms = chart.getAllGeoms();

                                    for (let i = 0; i < geoms.length; i++) {
                                        const geom = geoms[i];

                                        if (geom.getYScale().field === value) {
                                            if (checked) {
                                                geom.show();
                                            } else {
                                                geom.hide();
                                            }
                                        }
                                    }
                                }}
                            />
                            <Geom
                                type="area"
                                position="time*flow"
                                color="l(100) 0:#a50f15 1:#f7f7f7"
                                opacity={0.85}
                            />
                            <Geom
                                type="area"
                                position="time*rain"
                                color="l(100) 0:#293c55 1:#f7f7f7"
                                opacity={0.85}
                            />
                        </Chart>
                    }
                    <div>
                        <Slider
                            width="auto"
                            height={26}
                            start={ds.state.start}
                            end={ds.state.end}
                            xAxis="time"
                            yAxis="flow"
                            scales={{
                                time: {
                                    type: "time",
                                    tickCount: 10,
                                    mask: "M/DD H:mm"
                                }
                            }}
                            data={dv}
                            backgroundChart={{
                                type: "line"
                            }}
                            onChange={this.onChange.bind(this)}
                        />
                    </div>
                </div>
            );
        }
    }
    return SliderChart;
}

export default class App extends React.Component {
    render() {
        const SliderChart = getComponent(data);
        return (
            <div>
                <SliderChart />
            </div>
        );
    }
}
