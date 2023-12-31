PGDMP  :    #            	    {         
   db_movies2    16.0    16.0     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17131 
   db_movies2    DATABASE     �   CREATE DATABASE db_movies2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_Indonesia.1252';
    DROP DATABASE db_movies2;
                postgres    false            �            1259    17132    movies    TABLE     �   CREATE TABLE public.movies (
    id integer NOT NULL,
    title character varying(150),
    genres character varying(50),
    year character varying(50),
    photo character varying(50)
);
    DROP TABLE public.movies;
       public         heap    postgres    false            �            1259    17135    movies_id_seq    SEQUENCE     �   ALTER TABLE public.movies ALTER COLUMN id ADD GENERATED BY DEFAULT AS IDENTITY (
    SEQUENCE NAME public.movies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    17136    users    TABLE     �   CREATE TABLE public.users (
    id integer,
    email character varying(50),
    gender character varying(50),
    password character varying(50),
    role character varying(50)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �          0    17132    movies 
   TABLE DATA           @   COPY public.movies (id, title, genres, year, photo) FROM stdin;
    public          postgres    false    215   �
       �          0    17136    users 
   TABLE DATA           B   COPY public.users (id, email, gender, password, role) FROM stdin;
    public          postgres    false    217   �       �           0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 1, true);
          public          postgres    false    216            U           2606    17152    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    215            �   	  x��X�r�]�_��d�Դ�oR��Z�G�e+�'NwMU$��$�I���d�,��6?���%y���Ԍ�A��s�=�@�Knr�4�R%-���y�~i���;���.�����șR)��U�e��]rz8���L�fG͋�$�]��Z�K:ԢdR
FFj^�x�i�l�e�>p9c�|O?Jz/�������\l��vmH̙�J���4t��t���B���36�w,˺Dz�z�ۍ"rŘ��Y�����K�d��x]��.n�ɩ(��Lk������خҼ^o6캄\
���Sױ��U�Bǜ2�8�V�� �E�Y�;d��_�aUɋbo�Kn*I���F��O�9�����Deb�Q����L��/+�B)Z��6��Z���v�E�qm@����=�����@����J�'��}6@ح6� b�9}�Η�^���.��,3N��I���cY�G伒xbY����m��(y]�
�����9A��l���L4[tlr�Bi�C��.�iɰ�)z�-nT�䜛=-�����*�Ze�Z<�\Hz
��~��G�Yn��i3|@�X����g-1�`�%4r���u�Мe��!��?��2��0c�i%S�\2��b��єg�/WR�#r��V�0ۄA��L�$�T��S_A�==�9���ܑ��`��S��)��b���2��w��#X萉`RQ!)Cy����p���.��v�z�X��.3=����{����	�ӝz�G��Я\�����Ȑ q!�,��tG⺃|�W�+-U9P9|�{�����9ώHGK���)��Ɛ)o��5"/㓿m`	���p�!Ue�,u4h-���Id���)K=��ݕV,S��]h��Ƙ��%p��7z���ӌ��Ž�&�N��iōX����g)9�Z�Cv�p̎�xMo5g��c�-rɄ�{��o���#wJ��j]���m��7��ܾ�Gg܆>���}8�zs|b��R>B��)
�>7���j�h*�=��"���"L�R�4`�Gu�X��Y�G;O�����	�Z(�saXZ��[���r��r�q�1�V*�9�c ��&X&+J0�e}�`2�B��K.���RZL��^#3 �cZO2R������/v�G`�.�F�kb~���WY�,mF����m��K�A���*������6��5�ȭ!+@NZ���>�1<1h�->T3�>�p
=�J=���T8o�'�С�-�ML�:"��b�d��
�o�(���V���R�pU�/&�S����Z��Q�M�!��t�6���CՕ*M��K�^d�
�Xi7 �ٚ��0/r
��;t��n�kk'�Q��xmt��ܪh< '֠^��� ?�����`���,q�WU>�����f4����C����v\��h׆6��#C��?��PE��L.�js%�W��	�- �����6��֩���~���nr��t�Ռ���o�:)�^���$0�=�To���B�"�S��y�P��u7�۵�Nbr���)۰�� �����=�՚0z��ۓƠ?��;�ݙ۝�����ԝU��\���Q�	����޲졅�շ�D�U��8��{4,nl!$�I'J��	�]�鉞U��ޢ�c\1.���Q��:vX�Y�� �yɲ}bmxܔ~c[l%�����@���Yk�Fsb6iz�(vJN\Vs��OJ��u*���Ơ�H�O�<�X���ێ�='$#?A��x�ϧ��� ��h���m�R~����0��.�}%�~���<�U4r��gӲ���{��y.a.�����[g�.�T����NB�$^�!�,,���-�J����[d��m�a��o��!6>�Lc�)���\3��W�����q����)ѕ(�$t7%�,�c4�^B�qp�a��SXۦ����R���)�Ԟ6���g�d������ۉ���������n�F�1�����J����\*���k\
�/3<b�y���)�f��/2��
^�x^?��RZ3rO�LϘ6<@���q�g�[e?���b��@e��w��-{��o�t��BM����cnx�TZ��;�yI�4vcr]��j�"5��<�w���E��ެm�'H3�5���9�uQj�=5������^cջswǁo�i���|�y������:y��������_�{27���w�&>��DyԿU7;�^��o14!7|����wA�/�AF[/��L��0�aѯ��Ȋɝ0�v�[���G����[Yv�T��泹��V�~7B�����]���R؟=5�;�&d't������ッ���H/<      �   �
  x��X�r�νv��{�Ӊ�p�BK-�~�q'1I�`'@x���v���3�ٳ-K��֒���\DLY�W�G:庸�*BC�є�'�&q&*���'�/�.T�\��[H�0ue��K�"�[0	����6����{{/�^�"����|�TƘMv�M
v�J4�m���
��Q~��WmD#Ř��E<��TBz)��e��+LZ���~��A
V��������E�x��N'7j�����p��t��J7�+��&"xXT����+7�1{D]��R]u���T�������*,� ���/Vԯ�\��Y��R�X�I�����.����xRiA��%/!W�x�p ��(޶�!8�/?�B�'#��@����`�J��mx��#�)�'��)����Z��;������d��(�K()Ðy$/�ɴ��U��u��4gj�um�B4�P�=O��!lmZ��T0�+�i�m�$�Gq !J.K�J�z|z���(�Uy1U�k��fg���b��%6�!��	T����¿f�����/�!���c�Ed���T,M�>�3����n��<�5m��P'!^�H�@�IL�*g9���н_�Ǉ��`{($�t��I��ޫt[��d��k4�m�t�_mH 3 ��6���=SaZ� M������1y,�г1���\$$.#�yG������i+��/6�c�Ǌ8%W.��n��{Ԇb4��n!�9���Ȟꚟ
)r�������1�o���TH� )�m&�&[*V�����é����(,C�#}�ݧ��h��g������Lr_���#�����i���z�_^�6��ȋg;�%������4[�ݻ�{�e.����RjP ��̴Y������4�!��,�TD��L��{�ϗ=Lo�ꖽt����,�Ô� � �g�v�gnj�{�0R`�u	�2���M�W�� ��X��dY����{[.oGt7�h��^�Z-��C�&<��=�3ZĬ�;�-�w��ᫍ6>�Dt ��	$�4pE�pG׬�u[����VQ���_��ag��AI�`�H
f4z���h�:3��( M�u7b�D�5 �I�?9)�[éS��r�a1�Ƥ��ҳ#mKg!\��n ��i�Rl���[à?9�Q+�r�-��x����qy>]�d���o�3��(ۀ����m�X �epζ������;.xm�H 尢���y�+�},��4�8^&�v�Ry�;$�5���w��[���n�(��$�5�ռ��1���lՌ���.���h�?�����7Z���9���=S�2M��䟩u�|_�����,*�Z�14�諟=�i�yϺy�'m�9��R1�HX�+C^�+������jކ6S!H8�����'��r�}X�`�3�ot,���S�7H�Bz��-?_7m^DǙ헥��=�>���E<h�r�ܿ,�-��;@-48������3��vO\��N�EJ�x��h��y�d�L{٠��z�\�L�0���	�bȌ��?�Ǟ��BE�z�B�N��pw3���X7�ez כ������:<�Y���9A�C��&'$-S������}Rﯝ?�]�R���)� ������m~�':=��@F��E�3�F����U��ȱ5*=0Ơ� ��t;��d������;�d֘�0�8-�B�<:��[������<PR�T�Y�s ��2���idp�Ӫ�<r��\��ؠ	?-��Π��b: Y&j���x���4�V���f�R�J���5��4$>bW��rx4M�`!S�j\�[O�}��U1��Pv���CipID��mK��y���e��k�#�rj���nG�Ձ9F���!עﱀ}�h����p���λR0�x>}�����<�ڒ�q�s��zv��
*�%pE�\D�)������>���r 6�d=^��HhF���/���~����l0�m�DL��ࠋߚ1�a���p�F��0�2���eB�%��:ݭj�v�A"T�B�6`㸑���ėR�Η�c���h�.�l�*f�p���>K�z�U*r�9vfF�t���	sr��mR�|����6���rm\�y���"�Ct,���J�KQ���>��
XiL+f;�Z��E���#�:��ʅ�H�3��5RX�̴����|�O^��b!��L���.�7d_#�T���0 �_ح㯲�6J�u��v=?Hl��-z��j�x�7����4��(�)�>�-x�a5`p�̓�{�J�G�.,�l� g�G47�a��6�y������}L��z0·�)��L6��_� �U��; 0�E�?cܮ>�g�����E��1&�T��j|��{��8��D����"P�Y�5�4$64ChC:��t��#�E0p��7;�њ;i��R�^Y:��=�0ا�Y����qfC��]�w���ܷ9�A���8��6ǁ��ԑ*�ސ܇�J�-����|�ս�#�=�}�����|�����:�V�������FoY/bvj�}e���Ƀ�^ũ���s��3���øT���Z�sP��Jۂ����^s5���g7e�=C�z]T�^@��'�}hE��F>���'<�L�������)�p�)G�<������F�� !����s\ӛ���ޥ��j��A��<[�C���|<�w�=0��Y0���-�("Q���)Dyr��<���(4�����p���?�����s6���F�}uu�_���     