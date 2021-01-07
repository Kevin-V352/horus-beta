import L from 'leaflet';
import SvgIcon from './selector-icon.svg'

const SelectorIcon = new L.Icon({
    iconUrl: SvgIcon,
    iconRetinaUrl: SvgIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35]
});

export default SelectorIcon;