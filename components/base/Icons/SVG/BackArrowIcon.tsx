import { GenIcon, IconBaseProps } from 'react-icons';

export const BackArrowIcon = (props: IconBaseProps): JSX.Element => {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 22 12' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M5.98008249,0.000715227779 C5.72012155,0.00844768967 5.47338838,0.116886617 5.29215512,0.303058461 L0.291002787,5.30040332 C-0.097000929,5.68996846 -0.097000929,6.31913107 0.291002787,6.70869621 L5.29215512,11.7080039 C5.68416724,12.0978348 6.31841014,12.097258 6.70970982,11.7067147 C7.1010095,11.3161714 7.10158859,10.6831534 6.71100412,10.2918976 L3.41794444,7.00518886 L20.9952648,7.00518886 C21.3538468,7.00631021 21.6856719,6.81602215 21.8652879,6.50626637 C22.044904,6.19651059 22.044904,5.81455172 21.8652879,5.50479594 C21.6856719,5.19504016 21.3538468,5.0047521 20.9952648,5.00587345 L3.41012655,5.00587345 L6.71100412,1.71916471 C7.01055666,1.43203132 7.10127395,0.990069844 6.9389792,0.608503193 C6.77668446,0.226936543 6.3951142,-0.0149183016 5.98008249,0.000715227779 L5.98008249,0.000715227779 Z',
                },
                child: [],
            },
        ],
    })(props);
};

export default BackArrowIcon;