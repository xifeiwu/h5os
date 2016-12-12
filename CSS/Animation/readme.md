linear：
线性过渡。等同于贝塞尔曲线(0.0, 0.0, 1.0, 1.0)
ease：
平滑过渡。等同于贝塞尔曲线(0.25, 0.1, 0.25, 1.0)
ease-in：
由慢到快。等同于贝塞尔曲线(0.42, 0, 1.0, 1.0)
ease-out：
由快到慢。等同于贝塞尔曲线(0, 0, 0.58, 1.0)
ease-in-out：
由慢到快再到慢。等同于贝塞尔曲线(0.42, 0, 0.58, 1.0)
cubic-bezier(<number>, <number>, <number>, <number>)：
特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内

animation-timing-function: ease;
animation-timing-function: ease-in;
animation-timing-function: ease-out;
animation-timing-function: ease-in-out;
animation-timing-function: linear;
animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
animation-timing-function: step-start;
animation-timing-function: step-end;
animation-timing-function: steps(4, end);

animation-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);