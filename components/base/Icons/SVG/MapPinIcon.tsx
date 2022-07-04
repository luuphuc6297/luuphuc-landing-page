import { GenIcon, IconBaseProps } from 'react-icons';

export const MapPinIcon = (props: IconBaseProps): JSX.Element => {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 16 20' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M13.5027142,2.15300736 C11.9094486,0.667452307 9.76177601,-0.107213328 7.56694281,0.0119742582 C3.28867109,0.271856775 -0.0350032701,3.76898557 0.000278290217,7.97352449 C0.0323863371,9.96921623 0.841793245,11.8772088 2.26246295,13.3061101 C3.41384149,14.4810156 4.48636393,15.7279 5.47328377,17.0389199 C5.91226584,17.6075069 6.33561851,18.1834261 6.75489395,18.7640114 L7.44462583,19.7192108 C7.57206137,19.8953483 7.7786014,20 7.99878972,20 C8.21897804,20 8.42551806,19.8953483 8.55295361,19.7192108 L9.5668255,18.319407 C9.87669519,17.8894673 10.196758,17.4641936 10.5324501,17.0449191 C11.6475733,15.6251182 12.8360867,14.2993041 13.9559666,13.0774754 C16.8485441,9.91743084 16.6475102,5.0720309 13.5027142,2.15300736 L13.5027142,2.15300736 Z M7.99844995,11.3323868 C6.12195537,11.3323868 4.60075596,9.8402119 4.60075596,7.99952085 C4.60075596,6.1588298 6.12195537,4.66665488 7.99844995,4.66665488 C9.87494453,4.66665488 11.3961439,6.1588298 11.3961439,7.99952085 C11.3938973,9.8392983 9.87401315,11.3301831 7.99844995,11.3323868 Z',
                },
                child: [],
            },
            {
                tag: 'circle',
                attr: {
                    cx: '8',
                    cy: '8',
                    r: '2',
                },
                child: [],
            },
        ],
    })(props);
};

export default MapPinIcon;