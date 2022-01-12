import { CodeSpan } from '../../components/CodeSpan'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'
import { Lnk } from '../../components/Lnk'

export const laravelBasics = {
  title: 'Laravel basics',
  date: '2022.01.12',
  tagsArr: ['laravel', 'php', 'basics'],
  postParts: [
    {
      val: <>
      <Lnk path='https://laravel.com/'>Laravel</Lnk> is a php framework.
      </>,
    },
    {
      val: <H3>Windows installation</H3>,
    },
    {
      val: <ol>
        <li>Install <Lnk path='https://www.apachefriends.org/index.html'>XAMPP</Lnk></li>
        <li>Install <Lnk path='https://getcomposer.org/download/'>Composer</Lnk></li>
        <li>With terminal go to <code>cd /C/xampp/htdocs</code></li>
        <li>From terminal within a folder install laravel package <code>composer create-project laravel/laravel laravelApp</code> </li>
        <li>Go to the project folder <code>cd laravelApp</code> </li>
        <li>Open it with VSCode <code>. code</code></li>
        <li>Start Apache server from XAMPP software</li>
        <li>Project is served from <a href="http://localhost/laravelApp/public/index.php"></a>http://localhost/laravelApp/public/index.php</li>
      </ol>,
    },
    {
      val: <H5>Virtual host (optional)</H5>,
    },
    {
      val: <>
        We can swap long project url <code>http://localhost/laravelApp/public/index.php</code>to a short domain name <code>laravelApp.dev</code>
      </>,
    },
    {
      val: <>
        Add virtual host configuration into <code>/C/xampp/apache/conf/extra/httpd-vhosts.conf</code>
      </>,
    },
    {
      type: 'code',
      lang: 'apacheconf',
      val: `
      <VirtualHost *:80>
        DocumentRoot "C:/xampp/htdocs/laravelApp/public"
        ServerName laravelApp.dev
      </VirtualHost>
      `,
    },
    {
      val: <>
        Modify <code>C/Windows/System32/drivers/etc/hosts</code> as administrator by adding following
      </>,
    },
    {
      type: 'code',
      lang: 'apacheconf',
      val: `
        127.0.0.1 localhost
        127.0.0.1 laravelapp.test
      `,
    },
    {
      val: <>
        Restart Apache
      </>,
    },







    {
      type: 'code',
      lang: 'js',
      val: `
      xxx
      `,
    },
    {
      val: <>
        xxx
      </>,
    },

  ],
}
