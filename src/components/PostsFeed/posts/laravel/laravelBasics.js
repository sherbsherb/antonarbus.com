import { CodeSpan } from '../../components/CodeSpan'
import { H3 } from '../../components/H3'
import { H5 } from '../../components/H5'
import { Lnk } from '../../components/Lnk'
import folderStructure from './pics/folderStructure.png'
import viewFromRoute from './pics/viewFromRoute.png'
import viewFromRoutOutput1 from './pics/viewFromRoutOutput1.png'
import viewFromRoutOutput2 from './pics/viewFromRoutOutput2.png'
import aboutBlade from './pics/aboutBlade.png'
import viewFromRoutOutput3 from './pics/viewFromRoutOutput3.png'
import artisanCreateController from './pics/artisanCreateController.png'
import routesToControllers from './pics/routesToControllers.png'
import fromEnvFileToTemplate from './pics/fromEnvFileToTemplate.png'
import envFileDataInTitle from './pics/envFileDataInTitle.png'
import layout from './pics/layout.png'
import passValueToView from './pics/passValueToView.png'
import passArrayIntoView from './pics/passArrayIntoView.png'
import passArrayIntoViewResult from './pics/passArrayIntoViewResult.png'
import postRequest from './pics/postRequest.png'
import addCSSfile from './pics/addCSSfile.png'
import XAMPP from './pics/XAMPP.png'
import phpMyAdmin from './pics/phpMyAdmin.png'
import threeFilesAreCreated from './pics/threeFilesAreCreated.png'

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
        <li>Project is served from <a href="http://localhost/laravelApp/public/index.php">http://localhost/laravelApp/public/index.php</a></li>
      </ol>,
    },
    {
      val: <H5>Virtual host (optional)</H5>,
    },
    {
      val: <>
        We can swap long project url <a href="http://localhost/laravelApp/public/index.php">http://localhost/laravelApp/public/index.php</a> with a short domain name <a href="http://laravelApp.test">http://laravelApp.test</a>
      </>,
    },
    {
      val: <>
        Add virtual host configuration into <code>C:\xampp\apache\conf\extra\httpd-vhosts.conf</code> file
      </>,
    },
    {
      type: 'code',
      lang: 'apacheconf',
      val: `
      <VirtualHost *:80>
        DocumentRoot "C:/xampp/htdocs/laravelApp/public"
        ServerName laravelapp.dev
      </VirtualHost>
      `,
    },
    {
      val: <>
        Modify <code>C:\Windows\System32\drivers\etc\hosts</code> file as administrator by adding following & restart Apache.
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
      val: <H3>MVC</H3>,
    },
    {
      val: <>
        Laravel is based on the MVC architecture, where
        <ul>
          <li><i>Model</i> takes care of database. Models go into <code>app</code> folder.</li>
          <li><i>View</i> is responsible for UI</li>
          <li><i>Controller</i> handles requests</li>
        </ul>
      </>,
    },
    {
      val: <>Files are distributed as on the picture</>,
    },
    {
      type: 'img',
      val: folderStructure,
    },
    {
      val: <H3>View from route</H3>,
    },
    {
      val: <>We can return text, html, page for a GET request directly from a <code>routes/web.php</code></>,
    },
    {
      type: 'img',
      val: viewFromRoute,
    },
    {
      val: <>HTML string is returned.</>,
    },
    {
      type: 'img',
      val: viewFromRoutOutput2,
    },
    {
      val: <>HTML file is returned.</>,
    },
    {
      type: 'img',
      val: aboutBlade,
    },
    {
      type: 'img',
      val: viewFromRoutOutput3,
    },
    {
      val: <>Data can be passed via url.</>,
    },
    {
      type: 'img',
      val: viewFromRoutOutput1,
    },
    {
      val: <H3>View from controller</H3>,
    },
    {
      val: <>We usually do not want to return a <i>view</i> from a <i>route</i></>,
    },
    {
      val: <>Normal way is that a route goes to a <i>controller</i> function, which returns a <i>view</i></>,
    },
    {
      val: <H5>Artisan</H5>,
    },
    {
      val: <>The easiest way to create a <i>controller</i> is to use <i>artisan</i> command like <code>php artisan make:controller PagesController</code></>,
    },
    {
      val: <><code>PagesController.php</code> file has been created and we return views via functions, one with a text, another with a page.</>,
    },
    {
      type: 'img',
      val: artisanCreateController,
    },
    {
      val: <>Do not forget to add routes to controllers with following pattern.</>,
    },
    {
      type: 'img',
      val: routesToControllers,
    },
    {
      val: <H3>Post request</H3>,
    },
    {
      val: <>POST, PUT & DELETE requests are done similar way as GET.</>,
    },
    {
      val: <>May require disabling CSRF verification.</>,
    },
    {
      type: 'img',
      val: postRequest,
    },
    {
      val: <H3>Blade templating</H3>,
    },
    {
      val: <>Note how we dynamically inserted {'<title>'} into page from <code>.env</code> file.</>,
    },
    {
      type: 'img',
      val: fromEnvFileToTemplate,
    },
    {
      type: 'img',
      val: envFileDataInTitle,
    },
    {
      val: <H5>Layouts</H5>,
    },
    {
      val: <>If we have pages with repetitive blocks, we may create a layout template and avoid repeating ourselves.</>,
    },
    {
      val: <>To make templating easier we may install <Lnk path='https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade'>blade snippets</Lnk> for syntax highlighting.</>,
    },
    {
      type: 'img',
      val: layout,
    },
    {
      val: <H3>Pass value</H3>,
    },
    {
      val: <H5>Pass single value</H5>,
    },
    {
      type: 'img',
      val: passValueToView,
    },
    {
      val: <H5>Pass multiple values in associative or indexed array</H5>,
    },
    {
      type: 'img',
      val: passArrayIntoView,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
      // controller
      public function page3() {
        $data = array(
          'title' => 'TITLE',
          'items' => ['ITEM-01', 'ITEM-02', 'ITEM-03']
        );
        return view('pages.page3', [
          'data' => $data, 
          'title' => $data['title'], 
          'items' => $data['items']
        ]);
      }
      `,
    },
    {
      type: 'code',
      lang: 'php',
      val: `
      // view
      @extends('layouts.layout')
      @section('content')
        <p><?php var_dump($data); ?></p>

        <p>Purely with php </p>
        <h3><?php echo $title;?></h3>
        <ul>
          <li><?php echo $items[0];?></li>
          <li><?php echo $items[1];?></li>
          <li><?php echo $items[2];?></li>
        </ul>
        
        <p>With template rules </p>
        <h3>{{$title}}</h3>
        @if(count($items) > 0)
          <ul>
            @foreach($items as $item)
              <li>{{$item}}</li>
            @endforeach
          </ul>
        @endif
      @endsection
      `,
    },
    {
      type: 'img',
      val: passArrayIntoViewResult,
    },
    {
      val: <H3>Add CSS</H3>,
    },
    {
      val: <><code>{'{{asset(path)}}'}</code> refers to <i>public</i> folder</>,
    },
    {
      type: 'img',
      val: addCSSfile,
    },
    {
      val: <H3>Database for posts</H3>,
    },
    {
      val: <>Do not forget to launch MySQL in XAMPP</>,
    },
    {
      type: 'img',
      val: XAMPP,
    },
    {
      val: <>Create a new <code>laravelApp</code> database via <Lnk path="http://localhost/phpmyadmin">http://localhost/phpmyadmin</Lnk></>,
    },
    {
      val: <>No need to create tables, because it will be done via <i>migrations</i>.</>,
    },
    {
      type: 'img',
      val: phpMyAdmin,
    },
    {
      val: <>Let's create a new Controller for POST requests for the database with <i>artisan</i> command <code>php artisan make:controller PostsController</code></>,
    },
    {
      val: <>Let's create a Model + 'migration' with <i>artisan</i> command <code>php artisan make:model Post -m</code></>,
    },
    {
      val: <>3 files have been created</>,
    },
    {
      type: 'img',
      val: threeFilesAreCreated,
    },
    {
      val: <H3>Migration</H3>,
    },
    {
      val: <>Laravel <i>migration</i> is a way to create a  database table without database manager.</>,
    },
    {
      val: <>Migrations allow to add or drop fields in a database without deleting the records already present, it is kind of a version control.</>,
    },
    {
      val: <>Anything we want to add or execute / reverse during a migration goes inside the <code>up()</code> / <code>down()</code>methods.</>,
    },

    {
      type: 'code',
      lang: 'js',
      val: `
      xxxyyyxxx
      `,
    },
    {
      val: <>
        xxx
      </>,
    },

  ],
}
