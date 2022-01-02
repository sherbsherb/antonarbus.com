import SOAPvsRESTrequest from './SOAPvsRESTrequest.png'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'

export const webServices = {
  title: 'Web services',
  date: '2021.12.11',
  tagsArr: ['general'],
  postParts: [
    {
      val: (
        <>
          Web service allows data exchange in different formats (XML, JSON, text) between Client and Server over the web HTTP protocol.
        </>
      ),
    },
    {
      val: (
        <>
          Basic web services are REST and SOAP.
        </>
      ),
    },
    {
      val: (
        <>
          <H3>
            REST
          </H3>
        </>
      ),
    },
    {
      val: (
        <>
          <b>RE</b>presentational <b>S</b>tate <b>T</b>ransfer is a way / style of implementing a web service of data exchange with following principles:
          <ul>
          <li>access data by URL</li>
          <li>based HTTP communication methods GET/POST/PUT/DELETE for actions</li>
          <li>data can be represented as application/xml, application/json, text/html, etc...</li>
          <li>request should be stateless, not depending on previous requests, meaning that no information is stored on a server</li>
          <li>information can be cached on a clint side via Cache-Control & Last-Modified in HTTP Response Headers</li>
        </ul>
        </>
      ),
    },

    {
      val: (
        <H3>
          SOAP
        </H3>
      ),
    },
    {
      val: (
        <>
          <b>S</b>imple <b>O</b>bject <b>A</b>ccess <b>P</b>rotocol uses XML data messages format over HTTP (Post) communication protocol.
        </>
      ),
    },
    {
      val: (
        <>
          SOAP is a way of implementing a web service & complies to SOAP Web Services Specifications.
        <ul>
          <li>Request to be sent in XML format</li>
          <li>XML format has a defined structure: SOAP MESSAGE</li>
          <li>SOAP MESSAGE consists from Envelope with Header + Body</li>
        </ul>
        </>
      ),
    },
    {
      val: (
        <H3>
          SOAP vs REST request
        </H3>
      ),
    },
    {
      type: 'img',
      src: SOAPvsRESTrequest,
    },
  ],
}
