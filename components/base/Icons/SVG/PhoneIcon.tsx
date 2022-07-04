import { GenIcon, IconBaseProps } from 'react-icons';

export const PhoneIcon = (props: IconBaseProps): JSX.Element => {
    return GenIcon({
        tag: 'svg',
        attr: { viewBox: '0 0 20 20' },
        child: [
            {
                tag: 'path',
                attr: {
                    d: 'M19.3566667,14.4 C19.302,14.3566667 15.3333333,11.496 14.244,11.7013333 C13.724,11.7933333 13.4266667,12.148 12.83,12.858 C12.734,12.9726667 12.5033333,13.2473333 12.324,13.4426667 C11.9469307,13.3196803 11.5791094,13.1699674 11.2233333,12.9946667 C9.3870144,12.1006724 7.90332758,10.6169856 7.00933333,8.78066667 C6.8339102,8.42494563 6.68419373,8.05711544 6.56133333,7.68 C6.75733333,7.5 7.032,7.26933333 7.14933333,7.17066667 C7.856,6.57733333 8.21133333,6.28 8.30333333,5.75866667 C8.492,4.67866667 5.63333333,0.682666667 5.60333333,0.646666667 C5.34068529,0.271458158 4.92340012,0.0340583816 4.46666667,0 C3.308,0 0,4.29133333 0,5.014 C0,5.056 0.0606666667,9.32533333 5.32533333,14.6806667 C10.6753333,19.9393333 14.944,20 14.986,20 C15.7093333,20 20,16.692 20,15.5333333 C19.9663144,15.0782101 19.7301795,14.6622212 19.3566667,14.4 L19.3566667,14.4 Z',
                },
                child: [],
            },
        ],
    })(props);
};

export default PhoneIcon;
