PGDMP      -            	    {         
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
    public          postgres    false    217   `       �           0    0    movies_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.movies_id_seq', 1, true);
          public          postgres    false    216            U           2606    17152    movies movies_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.movies
    ADD CONSTRAINT movies_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.movies DROP CONSTRAINT movies_pkey;
       public            postgres    false    215            �   |  x��X�r�]�_��d�ԴK�[�YV�m�e;�'JOM�D�lЀ��t�K�NYd���� �(��Te��n�%��{�A��b�%et�$�R�<���0I&�%����r�F=���Q���e2���Ɲ��&��^]j��/B��)z)�l���%�N�g.M��ۙJx��M�4,�I����=2��Z����k�̵O�\�'�k�TW"d1��+�<�5���o4�,�)��q���mZ��
Z6�̘1��F�ƌ�
 �i�a׮�13&�v��x%�N�6��é�a�X ��O��"΂i�[������ c��L[ԵY�P�п-xj����}��x��߳A&*���i�����6�,���k���@��))���W�n�s��w<f�G�L���v�Xh�-R�D�+X�!t��֘��e+u�I�����=���Ώ�8�Ze�uzBO=� F����A�|a��{�؃��k�SL3ژ���+�o2���p-��
?=(���8 7�=e����@0$w|Á�N�6@IU� "�ә����8���������Ѝ��Z��9��>��R+��2�I�7h�^V�4�V��ei���rV���M!���3}L��r�,^�,w�ow�<�fM�Z��qoC���	�,郈�j���څ��m�\�^$��Oh�E�q�*��f�]�8��z��䚡|_YĞ�x��Yn��w���0�!Ӛő�ӵ,i{H�@�d/������;ɛdИ-�e7wZE~�9(�
���`E@�2I���F���b:�;mr�br�G�6�mw���ݕR45����|�_C�b� ��v:no:�B>����{c��k&�`���2�.�XB6��e�cU9�'^��NjW��r��3�'�͋�\�@�������*����[�r��;ܕP�5tGdnРtʄ�o��B9>u[�g�f��*����ȅ�SP�TO���mCv��~ov;���қ�x�%��d�.9I��:p�m��G���k����8f�y&#��ٓ�4\smX����B5�u��&����~������:�R7�̱��i_��#����&f9���4%�z-r�UTX�1e�e|�Gn�` �.ds�hX�z���!�V�o��9��Nw��6�B��Չ�fn���ڞ�%K�$�ܨC�
ABwFćJ����M�Co�yK�Tq#"�?ٱ�>d�G��bv��,=2"wpHU@Y%���:��� 9Ћ�e�B?]+������+-�z�C8?�@�ot�����k�{}��F��ˆ[����f[
�[�F�;~:f�t��{��G���L�~ ��~����BI{±�Ӄ�t���XY����?:�����w������C��~!%�e�lQ��%��6e]�K�sp(:EسJլ5`�G�௤s��ZU�o�Of�^�D��J��Z���L�j[n{>�����F�\� :2�h���0�Xj� x��&?�ͫ�����CJ��>�=2#2>�~�y�Wv���Z�30̭![�����giT�]c��Gfs����?]��� gc<��6��d�H����:�bxj��->VK�>ϰ=�J=�hvm���g�I:�[�FK�V�fI�����C��W�SU����J���U�نvB4V�-�3�3Kv����F�jd���<�W�[��:*"ko���Z�[�ȩ3(�k*�������R$�����-ذE~Q���Z��hr�E�,�/��� Ѳ]��6�B�
U��䲪*���X�<W h�5��v����J��;��[����M��j�"��9��
���,(	�4�]2�|�г�b�:�*Q\�J|���,X��k<C�Tf���Ā�sj�v���
wVB{x7�V
�?�Rw�օ��O�
L�-�Q�q3����l��2Q\09����N�V�K�1�-���	����qz��Y���(�W�+%y�#˼�c��?E�b�7,>$֎�E�w��Um��	�	�(=��^3�6��I�/��V*p�*�S.���֩`�3�nf�@p8�}��8fŧ�ǎv�O�����NU&[$�� ���Q��П���F��P+ާ	{��LR10�K';
�Yi]8���F��ƁϤ;��� ����Z.�_�����%2�      �   �
  x��X�r�νv��{�Ӊ�p�BK-�~�q'1I�`'@x���v���3�ٳ-K��֒���\DLY�W�G:庸�*BC�є�'�&q&*���'�/�.T�\��[H�0ue��K�"�[0	����6����{{/�^�"����|�TƘMv�M
v�J4�m���
��Q~��WmD#Ř��E<��TBz)��e��+LZ���~��A
V��������E�x��N'7j�����p��t��J7�+��&"xXT����+7�1{D]��R]u���T�������*,� ���/Vԯ�\��Y��R�X�I�����.����xRiA��%/!W�x�p ��(޶�!8�/?�B�'#��@����`�J��mx��#�)�'��)����Z��;������d��(�K()Ðy$/�ɴ��U��u��4gj�um�B4�P�=O��!lmZ��T0�+�i�m�$�Gq !J.K�J�z|z���(�Uy1U�k��fg���b��%6�!��	T����¿f�����/�!���c�Ed���T,M�>�3����n��<�5m��P'!^�H�@�IL�*g9���н_�Ǉ��`{($�t��I��ޫt[��d��k4�m�t�_mH 3 ��6���=SaZ� M������1y,�г1���\$$.#�yG������i+��/6�c�Ǌ8%W.��n��{Ԇb4��n!�9���Ȟꚟ
)r�������1�o���TH� )�m&�&[*V�����é����(,C�#}�ݧ��h��g������Lr_���#�����i���z�_^�6��ȋg;�%������4[�ݻ�{�e.����RjP ��̴Y������4�!��,�TD��L��{�ϗ=Lo�ꖽt����,�Ô� � �g�v�gnj�{�0R`�u	�2���M�W�� ��X��dY����{[.oGt7�h��^�Z-��C�&<��=�3ZĬ�;�-�w��ᫍ6>�Dt ��	$�4pE�pG׬�u[����VQ���_��ag��AI�`�H
f4z���h�:3��( M�u7b�D�5 �I�?9)�[éS��r�a1�Ƥ��ҳ#mKg!\��n ��i�Rl���[à?9�Q+�r�-��x����qy>]�d���o�3��(ۀ����m�X �epζ������;.xm�H 尢���y�+�},��4�8^&�v�Ry�;$�5���w��[���n�(��$�5�ռ��1���lՌ���.���h�?�����7Z���9���=S�2M��䟩u�|_�����,*�Z�14�諟=�i�yϺy�'m�9��R1�HX�+C^�+������jކ6S!H8�����'��r�}X�`�3�ot,���S�7H�Bz��-?_7m^DǙ헥��=�>���E<h�r�ܿ,�-��;@-48������3��vO\��N�EJ�x��h��y�d�L{٠��z�\�L�0���	�bȌ��?�Ǟ��BE�z�B�N��pw3���X7�ez כ������:<�Y���9A�C��&'$-S������}Rﯝ?�]�R���)� ������m~�':=��@F��E�3�F����U��ȱ5*=0Ơ� ��t;��d������;�d֘�0�8-�B�<:��[������<PR�T�Y�s ��2���idp�Ӫ�<r��\��ؠ	?-��Π��b: Y&j���x���4�V���f�R�J���5��4$>bW��rx4M�`!S�j\�[O�}��U1��Pv���CipID��mK��y���e��k�#�rj���nG�Ձ9F���!עﱀ}�h����p���λR0�x>}�����<�ڒ�q�s��zv��
*�%pE�\D�)������>���r 6�d=^��HhF���/���~����l0�m�DL��ࠋߚ1�a���p�F��0�2���eB�%��:ݭj�v�A"T�B�6`㸑���ėR�Η�c���h�.�l�*f�p���>K�z�U*r�9vfF�t���	sr��mR�|����6���rm\�y���"�Ct,���J�KQ���>��
XiL+f;�Z��E���#�:��ʅ�H�3��5RX�̴����|�O^��b!��L���.�7d_#�T���0 �_ح㯲�6J�u��v=?Hl��-z��j�x�7����4��(�)�>�-x�a5`p�̓�{�J�G�.,�l� g�G47�a��6�y������}L��z0·�)��L6��_� �U��; 0�E�?cܮ>�g�����E��1&�T��j|��{��8��D����"P�Y�5�4$64ChC:��t��#�E0p��7;�њ;i��R�^Y:��=�0ا�Y����qfC��]�w���ܷ9�A���8��6ǁ��ԑ*�ސ܇�J�-����|�ս�#�=�}�����|�����:�V�������FoY/bvj�}e���Ƀ�^ũ���s��3���øT���Z�sP��Jۂ����^s5���g7e�=C�z]T�^@��'�}hE��F>���'<�L�������)�p�)G�<������F�� !����s\ӛ���ޥ��j��A��<[�C���|<�w�=0��Y0���-�("Q���)Dyr��<���(4�����p���?�����s6���F�}uu�_���     