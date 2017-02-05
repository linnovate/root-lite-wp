<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'icu-request');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'newstart');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'J|3hG_J9}5T56i1tr02NhV.3eS6ob$1Aae^VRSF=.`H-hBB>FOD+bZwjw9M>h2ZP');
define('SECURE_AUTH_KEY',  'qY$yCvWZ<gq{zYiEqiO@=oTlZ&@D69{bIW*=ewXL(-`d>@4<+8Y5ymv:)n%.a9> ');
define('LOGGED_IN_KEY',    'R]9D,&-!9gWiZ[Tb3;_im }l|WLQ7w/yC$SNBJ@Ip]B2wPm*u$T?fjxJ<`|c:v10');
define('NONCE_KEY',        '{1$,}O5BPrPKQKo@Uc}TtBbky%2wpy>$~.+`t:-!:G fb1k$Um.N }J:Z~=5a|$B');
define('AUTH_SALT',        'y]<>SDn9(9_XTB V_|u9-R99X/sx<v|h]b*rmD50b{J:?.KIwr/hszK`k*^1TP[-');
define('SECURE_AUTH_SALT', '&Vw{B&~[<X3o6HwjzW*R8h)g{@|Tb-=GMX[(m#BcsN6[r@75c`z7R{m)&EF>vS<^');
define('LOGGED_IN_SALT',   '.sQZ4s8sChf29.H(;U%17OqR8-jSB{Y<Opxu~&D8rs31ZNJ8/n<rs^&i1GTI*~66');
define('NONCE_SALT',       'Mb/1y*F`2+Y%V:g!g&.NewDJ*BkI7<R[fQDjbnqRGh`,Qfuv!;sV_v@%`<6WY#<m');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);


/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');